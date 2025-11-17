# Server Setup Guide

## Server Details
- **IP Address**: 170.64.136.184
- **Domain**: inquisitivemind.tech
- **Platform**: Digital Ocean
- **Web Server**: Caddy (reverse proxy)
- **App Port**: 8080
- **Public Ports**: 80 (HTTP), 443 (HTTPS)

## Quick Start

### Start Dev Server
```bash
npm run dev
```

### Stop Dev Server
```bash
pkill -f "vite dev"
```

### Reload Caddy Configuration
```bash
caddy reload --config /root/inquisitivemind/Caddyfile
```

## Configuration Files

### Vite Configuration (`vite.config.ts`)
```typescript
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		port: 8080,
		host: '0.0.0.0',  // Listen on all interfaces
		hmr: {
			clientPort: 443,  // Use HTTPS port for HMR
			protocol: 'wss',  // WebSocket Secure
			host: 'inquisitivemind.tech'
		},
		cors: {
			origin: [
				'https://inquisitivemind.tech',
				'https://www.inquisitivemind.tech'
			]
		}
	}
});
```

### Caddy Configuration (`Caddyfile`)
```
inquisitivemind.tech {
	reverse_proxy localhost:8080
}

www.inquisitivemind.tech {
	reverse_proxy localhost:8080
}
```

## DNS Configuration

### Digital Ocean DNS Settings
1. Go to: https://cloud.digitalocean.com/networking/domains
2. Add domain: `inquisitivemind.tech`
3. Add A records:
   - **Type**: A, **Hostname**: @, **Value**: 170.64.136.184
   - **Type**: A, **Hostname**: www, **Value**: 170.64.136.184

### Update Domain Nameservers
Point your domain to Digital Ocean nameservers:
- ns1.digitalocean.com
- ns2.digitalocean.com
- ns3.digitalocean.com

## Testing

### Test Direct App Access
```bash
# Test locally
curl -I http://localhost:8080

# Test via IP
curl -I http://170.64.136.184:8080
```

### Test Through Caddy
```bash
# Test HTTP (will redirect to HTTPS)
curl -I http://170.64.136.184

# Test HTTPS (from external machine)
curl -I https://inquisitivemind.tech
```

### Check Running Processes
```bash
# Check listening ports
ss -tlnp | grep -E ':(80|443|8080)'

# Check Vite process
ps aux | grep vite
```

## How It Works

1. **Vite Dev Server** runs on localhost:8080
2. **Caddy** listens on ports 80 and 443
3. **Caddy** automatically:
   - Redirects HTTP (port 80) to HTTPS (port 443)
   - Obtains and manages Let's Encrypt SSL certificates
   - Reverse proxies requests to localhost:8080
4. **DNS** resolves inquisitivemind.tech to 170.64.136.184
5. **HMR** uses WebSocket Secure (wss) over port 443 for hot reloading

## Troubleshooting

### App Not Responding
```bash
# Check if dev server is running
curl -I http://localhost:8080

# If not running, start it
npm run dev
```

### SSL/HTTPS Issues
- **Problem**: Can't access via HTTPS
- **Solution**: Ensure DNS is configured correctly and propagated
- **Check**: SSL certificate in Caddy logs

### Port Already in Use
```bash
# Kill existing process on port 8080
lsof -ti:8080 | xargs kill -9

# Or kill all vite processes
pkill -f "vite dev"
```

### Caddy Not Proxying
```bash
# Reload Caddy configuration
caddy reload --config /root/inquisitivemind/Caddyfile

# Check Caddy status
systemctl status caddy
```

## Production Deployment

For production, consider:
1. Use `npm run build` instead of `npm run dev`
2. Serve the built files with a production server
3. Use PM2 or systemd to keep the app running
4. Set up monitoring and logging
5. Configure firewall rules (ufw)

## Important Notes

- **Never access by IP for HTTPS** - SSL certificates are issued for domain names
- **HMR requires WSS** - The WebSocket Secure protocol is needed for hot reload over HTTPS
- **Port 8080 is internal** - Only Caddy should access it; firewall should block external access
- **Caddy handles SSL** - Automatic certificate management via Let's Encrypt
