/**
 * PM2 Ecosystem Config – b-wirtschaften API
 *
 * Deployment (plain server.js, no npm install needed):
 *   pm2 start ecosystem.config.js
 *   pm2 save
 *   pm2 startup   ← run the printed command to enable auto-start on reboot
 *
 * After git pull:
 *   pm2 restart bw-api
 *
 * Set API key:
 *   Adjust BW_API_KEY below (or export it via server env variables in Plesk)
 */
module.exports = {
  apps: [
    {
      name:   'bw-api',
      script: 'server.js',

      // Adjust to actual path on server (visible in Plesk → Node.js → Document Root)
      cwd: '/var/www/vhosts/b-wirtschaften.de/httpdocs',

      instances: 1,
      exec_mode: 'fork',

      autorestart:        true,
      max_memory_restart: '150M',

      out_file:        '/var/log/bw-api/out.log',
      error_file:      '/var/log/bw-api/err.log',
      merge_logs:      true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',

      env: {
        NODE_ENV: 'production',
        BW_API_PORT: 3100,
        // Set a strong random key – do NOT commit the real value here
        // Generate one with:  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
        // BW_API_KEY: 'replace-with-your-secret-key',
        N8N_CONTACT_WEBHOOK: 'https://n8n.estate-data.link/webhook/bw-contact'
      }
    }
  ]
};
