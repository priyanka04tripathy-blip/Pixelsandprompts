const fs = require('fs');
const path = require('path');

console.log('Searching for recently modified files (last 30 minutes)...');
const now = Date.now();
const threshold = 30 * 60 * 1000; // 30 minutes

function scan(dir, depth = 0) {
  if (depth > 5) return;
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (file === 'node_modules' || file === '.git' || file === 'proc' || file === 'sys' || file === 'dev' || file === 'lib' || file === 'dist' || file === 'usr' || file === 'var' || file === 'run' || file === 'node-compile-cache') {
        continue;
      }
      let stat;
      try {
        stat = fs.statSync(fullPath);
      } catch (e) {
        continue;
      }
      if (stat.isDirectory()) {
        scan(fullPath, depth + 1);
      } else {
        const diff = now - stat.mtimeMs;
        if (diff < threshold) {
          console.log(`NEW FILE: ${fullPath} (${(stat.size / 1024).toFixed(1)} KB) - modified ${((diff / 1000) / 60).toFixed(1)} mins ago`);
        }
      }
    }
  } catch (err) {}
}

scan('/');
console.log('Search done.');
