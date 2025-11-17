#!/bin/bash

# Setup HTTPS for inquisitivemind.tech with Caddy
# This script must be run with sudo

set -e  # Exit on any error

echo "=========================================="
echo "Setting up HTTPS for inquisitivemind.tech"
echo "=========================================="

# Step 1: Fix any dpkg issues
echo ""
echo "[1/5] Fixing dpkg configuration..."
dpkg --configure -a

# Step 2: Update and install prerequisites
echo ""
echo "[2/5] Installing prerequisites..."
apt update
apt install -y debian-keyring debian-archive-keyring apt-transport-https curl

# Step 3: Add Caddy repository and install
echo ""
echo "[3/5] Installing Caddy..."
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
apt update
apt install -y caddy

# Step 4: Copy Caddyfile configuration
echo ""
echo "[4/5] Configuring Caddy..."
cp /root/inquisitivemind/Caddyfile /etc/caddy/Caddyfile

# Step 5: Enable and start Caddy
echo ""
echo "[5/5] Starting Caddy service..."
systemctl enable caddy
systemctl restart caddy

# Check status
echo ""
echo "=========================================="
echo "Setup complete!"
echo "=========================================="
echo ""
echo "Caddy status:"
systemctl status caddy --no-pager

echo ""
echo "Your site should now be accessible at:"
echo "  - https://inquisitivemind.tech"
echo "  - https://www.inquisitivemind.tech"
echo ""
echo "SSL certificates will be automatically obtained from Let's Encrypt."
echo "Make sure ports 80 and 443 are open in your firewall."
