const fs = require('fs');
const path = require('path');

// Path to exported index.html
const indexPath = path.join(__dirname, '../dist/index.html');

// The base href for GitHub Pages
const baseHref = '/GitHub-user-search-app/';

// Read index.html
let html = fs.readFileSync(indexPath, 'utf8');

// If <base> already exists, remove it
html = html.replace(/<base href=".*">/i, '');

// Inject <base> right after <head>
html = html.replace(
  /<head>/i,
  `<head>\n  <base href="${baseHref}">`
);

// Write back to index.html
fs.writeFileSync(indexPath, html, 'utf8');

console.log('✅ Base href injected successfully');
