const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
content = content.replace(/Pawrents/g, 'Pawtners');
content = content.replace(/pawrents/g, 'pawtners');
content = content.replace(/Pawrent/g, 'Pawtner');
content = content.replace(/pawrent/g, 'pawtner');
fs.writeFileSync('index.html', content);
console.log('Replaced successfully');
