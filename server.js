/**
 * b-wirtschaften API Server
 * n8n integration endpoints:
 * - POST /api/contact → forward to n8n + save locally
 * - POST /api/testimonials → add/replace/delete testimonials
 * - POST /api/projects → add/replace/delete projects (photo pipeline)
 * - GET /api/health → health check
 * 
 * Run:  node server.js
 * PM2:  pm2 start ecosystem.config.js
 *
 * Env vars:
 *   BW_API_PORT          default 3100
 *   BW_API_KEY           required for /api/projects + /api/testimonials
 *   N8N_CONTACT_WEBHOOK  default https://n8n.estate-data.link/webhook/bw-contact
 */
const http  = require('http');
const https = require('https');
const fs    = require('fs');
const path  = require('path');

const PORT        = process.env.BW_API_PORT        || 3100;
const API_KEY     = process.env.BW_API_KEY         || '';
const DATA_DIR    = path.join(__dirname, 'data');
const N8N_WEBHOOK = process.env.N8N_CONTACT_WEBHOOK || 'https://n8n.estate-data.link/webhook/bw-contact';
const CORS = { 'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods':'GET,POST,OPTIONS', 'Access-Control-Allow-Headers':'Content-Type,x-api-key', 'Content-Type':'application/json' };

/** Validate API key from x-api-key header or ?api_key= query param */
const checkApiKey = req => {
  if (!API_KEY) return false;
  const header = req.headers['x-api-key'] || '';
  const qs = (() => { try { return new URL(req.url, 'http://localhost').searchParams.get('api_key') || ''; } catch { return ''; } })();
  return header === API_KEY || qs === API_KEY;
};

/** Fire-and-forget forward to n8n (supports http + https) */
const forwardToN8n = data => {
  try {
    const u = new URL(N8N_WEBHOOK);
    const lib = u.protocol === 'https:' ? https : http;
    const r2 = lib.request({ hostname: u.hostname, port: u.port || (u.protocol === 'https:' ? 443 : 80), path: u.pathname + u.search, method: 'POST', headers: { 'Content-Type': 'application/json' } });
    r2.on('error', () => {}); r2.write(JSON.stringify(data)); r2.end();
  } catch {}
};

const readJSON = f => { try { return JSON.parse(fs.readFileSync(path.join(DATA_DIR,f),'utf8')); } catch { return null; } };
const writeJSON = (f,d) => { if (d && typeof d === 'object' && !Array.isArray(d)) d.last_updated = new Date().toISOString(); fs.writeFileSync(path.join(DATA_DIR,f),JSON.stringify(d,null,2),'utf8'); };
const parseBody = r => new Promise((ok,no) => { let b=''; r.setEncoding('utf8'); r.on('data',c=>{b+=c;if(b.length>1e6)r.destroy();}); r.on('end',()=>{const trimmed = b.trim(); if(!trimmed){return no(new Error('Empty body'));} try{ok(JSON.parse(trimmed))}catch{no(new Error('Bad JSON'))}}); r.on('error',no); });

const server = http.createServer(async (req,res) => {
  if(req.method==='OPTIONS'){res.writeHead(204,CORS);res.end();return;}
  const url=req.url.split('?')[0];
  try {
    if(url==='/api/contact'&&req.method==='POST'){
      const data=await parseBody(req);
      const log=path.join(DATA_DIR,'contact_log.json');
      let arr=[]; try{arr=JSON.parse(fs.readFileSync(log,'utf8'));}catch{}
      arr.push({...data,received_at:new Date().toISOString()});
      fs.writeFileSync(log,JSON.stringify(arr,null,2),'utf8');
      forwardToN8n(data);
      res.writeHead(200,CORS);res.end(JSON.stringify({success:true}));return;
    }
    if(url==='/api/testimonials'&&req.method==='POST'){
      if(!checkApiKey(req)){res.writeHead(401,CORS);res.end(JSON.stringify({error:'Unauthorized'}));return;}
      const body=await parseBody(req);const d=readJSON('testimonials.json')||{testimonials:[]};
      if(body.action==='add'&&body.testimonial){d.testimonials.push({...body.testimonial,date:new Date().toISOString()});}
      else if(body.action==='replace'&&body.testimonials){d.testimonials=body.testimonials;}
      else if(body.action==='delete'&&body.index!==undefined){d.testimonials.splice(body.index,1);}
      writeJSON('testimonials.json',d);res.writeHead(200,CORS);res.end(JSON.stringify({success:true,count:d.testimonials.length}));return;
    }
    if(url==='/api/projects'&&req.method==='POST'){
      if(!checkApiKey(req)){res.writeHead(401,CORS);res.end(JSON.stringify({error:'Unauthorized'}));return;}
      const body=await parseBody(req);
      const existing = readJSON('projects.json');
      const projects = Array.isArray(existing) ? existing : existing?.projects || [];
      if(body.action==='add'&&body.project){projects.unshift({...body.project,date:body.project.date||new Date().toISOString()});}
      else if(body.action==='replace'&&body.projects){projects.splice(0, projects.length, ...body.projects);}
      else if(body.action==='delete'&&body.index!==undefined){projects.splice(body.index,1);}
      writeJSON('projects.json', Array.isArray(existing) ? projects : {projects});
      res.writeHead(200,CORS);res.end(JSON.stringify({success:true,count:projects.length}));return;
    }
    if(url==='/api/projects'&&req.method==='GET'){
      // Public: returns only active projects (no API key required)
      const d=readJSON('projects.json')||{projects:[]};
      const list=Array.isArray(d)?d:d.projects||[];
      const active=list.filter(p=>p.active!==false);
      res.writeHead(200,CORS);res.end(JSON.stringify(active));return;
    }
    if(url==='/api/health'){res.writeHead(200,CORS);res.end(JSON.stringify({status:'ok',ts:new Date().toISOString()}));return;}
    res.writeHead(404,CORS);res.end(JSON.stringify({error:'Not found'}));
  } catch(e){
    console.error('API ERROR',e.stack || e);
    if(e.message==='Bad JSON' || e.message==='Empty body'){
      res.writeHead(400,CORS);
      res.end(JSON.stringify({error:e.message}));
      return;
    }
    res.writeHead(500,CORS);
    res.end(JSON.stringify({error:'Server error'}));
  }
});

server.listen(PORT, () => {
  console.log(`bw-api  port=${PORT}  data=${DATA_DIR}  n8n→${N8N_WEBHOOK}`);
  if (!API_KEY) console.warn('WARNING: BW_API_KEY not set – /api/projects and /api/testimonials will return 401!');
});
