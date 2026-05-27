const fs = require('fs');
const path = require('path');

console.log('Scanning /app for any recently created images...');
const allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'];
const matches = [];

function scanDir(dir) {
  try {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      if (item === 'node_modules' || item === '.git') continue;
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
        const ext = path.extname(item).toLowerCase();
        if (allowedExtensions.includes(ext) || stat.size > 20000) {
          // If created/modified in the last 10 minutes
          const diffMins = (Date.now() - stat.mtimeMs) / (1000 * 60);
          if (diffMins < 10) {
            matches.push({ path: full, size: stat.size, mtime: stat.mtime, diffMins });
          }
        }
      }
    }
  } catch (err) {}
}

scanDir('/app');
console.log('Found matches:', matches);
