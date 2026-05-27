const fs = require('fs');
const path = require('path');

const candidates = [];
function search(dir, depth = 0) {
  if (depth > 12) return;
  try {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      if (['proc', 'sys', 'dev', 'node_modules', '.git', '.npm', 'cache'].includes(item)) continue;
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
  } catch (err) {}
}

search('/');
candidates.forEach(c => {
  console.log(`${c.path} (${(c.size / 1024).toFixed(1)} KB, Mtime: ${c.mtime})`);
});
