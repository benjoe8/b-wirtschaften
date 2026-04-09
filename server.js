/**
 * b-wirtschaften API Server
 * n8n integration endpoints:
 * - POST /api/contact → forward to n8n + save locally
 * - POST /api/testimonials → add/replace/delete testimonials
 * - POST /api/projects → add/replace/delete projects (photo pipeline)
 * - GET /api/health → health check
 * 
 * Run: node api/server.js  |  pm2 start api/server.js --name bw-api
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.BW_API_PORT || 3100;
const DATA_DIR = path.join(__dirname, 'data');
const N8N_WEBHOOK = process.env.N8N_CONTACT_WEBHOOK || 'http://localhost:5678/webhook/bw-contact';
const CORS = { 'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods':'GET,POST,OPTIONS', 'Access-Control-Allow-Headers':'Content-Type', 'Content-Type':'application/json' };

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
      // Forward to n8n
      try{const u=new URL(N8N_WEBHOOK);const o={hostname:u.hostname,port:u.port||80,path:u.pathname,method:'POST',headers:{'Content-Type':'application/json'}};const r2=http.request(o);r2.on('error',()=>{});r2.write(JSON.stringify(data));r2.end();}catch{}
      res.writeHead(200,CORS);res.end(JSON.stringify({success:true}));return;
    }
    if(url==='/api/testimonials'&&req.method==='POST'){
      const body=await parseBody(req);const d=readJSON('testimonials.json')||{testimonials:[]};
      if(body.action==='add'&&body.testimonial){d.testimonials.push({...body.testimonial,date:new Date().toISOString()});}
      else if(body.action==='replace'&&body.testimonials){d.testimonials=body.testimonials;}
      else if(body.action==='delete'&&body.index!==undefined){d.testimonials.splice(body.index,1);}
      writeJSON('testimonials.json',d);res.writeHead(200,CORS);res.end(JSON.stringify({success:true,count:d.testimonials.length}));return;
    }
    if(url==='/api/projects'&&req.method==='POST'){
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
      const d=readJSON('projects.json')||{projects:[]};
      res.writeHead(200,CORS);res.end(JSON.stringify(d));return;
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

server.listen(PORT,()=>console.log(`bw-api :${PORT} | n8n→${N8N_WEBHOOK}`));
