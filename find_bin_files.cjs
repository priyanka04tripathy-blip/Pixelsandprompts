const fs = require('fs');
const path = require('path');

console.log('Scanning all files on filesystem recursively...');
const matches = [];

function scanDir(dir) {
  try {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      if (item === 'node_modules' || item === '.git' || item === 'proc' || item === 'sys' || item === 'dev' || item === 'lib' || item === 'run') continue;
      const full = path.join(dir, item);
      let stat;
      try {
        stat = fs.statSync(full);
      } catch (e) {
        continue;
      }
      if (stat.isDirectory()) {
        scanDir(full);
      } else {
        // Log files modified in the last 15 minutes or containing "image" or "screenshot" in name
        if (stat.size > 1024 && (Date.now() - stat.mtimeMs < 15 * 60 * 1000 || item.toLowerCase().includes('image') || item.toLowerCase().includes('screen') || item.toLowerCase().includes('whatsapp') || item.toLowerCase().includes('dm') || item.toLowerCase().includes('ig') || item.toLowerCase().includes('insight'))) {
          matches.push({ path: full, size: stat.size, mtime: stat.mtime });
        }
      }
    }
  } catch (err) {}
}

scanDir('/');
console.log('Results:');
matches.forEach(m => {
  console.log(`${m.path} (${(m.size / 1024).toFixed(1)} KB) - ${m.mtime}`);
});
