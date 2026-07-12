const fs = require('fs');
let svg = fs.readFileSync('public/logo.svg', 'utf8');
svg = svg.replace(/xmlns:inkscape="[^"]+"/g, '').replace(/inkscape:[^\s=]*="[^"]*"/g, '');
fs.writeFileSync('public/logo.svg', svg);
console.log('SVG cleaned');