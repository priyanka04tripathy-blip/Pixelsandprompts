const fs = require('fs');
const path = require('path');

const candidates = [];

function search(dir, depth = 0) {
  if (depth > 8) return;
  try {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      if (item === 'node_modules' || item === '.git' || item === '.next' || item === 'dist' || item === 'proc' || item === 'sys' || item === 'dev' || item === 'usr' || item === 'var' || item === 'lib' || item === 'run' || item === 'node-compile-cache') continue;
      const full = path.join(dir, item);
      let stat;
      try {
        stat = fs.statSync(full);
      } catch (e) {
        continue;
      }
      if (stat.isDirectory()) {
        search(full, depth + 1);
      } else {
        const ext = path.extname(item).toLowerCase();
        if (['.png', '.jpeg', '.jpg', '.webp'].includes(ext)) {
          candidates.push({ path: full, size: stat.size, mtime: stat.mtime });
        }
      }
    }
  } catch (e) {}
}

search('/');

console.log('--- GLOBAL IMAGE FILES ---');
candidates.forEach(c => {
  console.log(`${c.path} (${(c.size / 1024).toFixed(1)} KB, Mtime: ${c.mtime})`);
});
