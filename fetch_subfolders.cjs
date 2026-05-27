const fs = require('fs');
const https = require('https');

function fetchFolderHTML(folderId) {
  return new Promise((resolve, reject) => {
    https.get(`https://drive.google.com/drive/folders/${folderId}?usp=sharing`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function parseIvd(html) {
  const ivdRegex = /window\['_DRIVE_ivd'\]\s*=\s*'([^']+)'/;
  const match = html.match(ivdRegex);
  if (match) {
    let content = match[1];
    content = content.replace(/\\x([0-9A-Fa-f]{2})/g, (m, g) => String.fromCharCode(parseInt(g, 16)));
    return JSON.parse(content);
  }
  return null;
}

function scanItems(parsed) {
  const list = [];
  function scan(obj) {
    if (!obj) return;
    if (Array.isArray(obj)) {
      if (obj.length >= 4 && 
          typeof obj[0] === 'string' && 
          Array.isArray(obj[1]) && 
          typeof obj[1][0] === 'string' &&
          typeof obj[2] === 'string' && 
          typeof obj[3] === 'string') {
        list.push({
          id: obj[0],
          parents: obj[1],
          name: obj[2],
          mimeType: obj[3]
        });
      }
      obj.forEach(item => scan(item));
    } else if (typeof obj === 'object') {
      for (const k in obj) {
        scan(obj[k]);
      }
    }
  }
  scan(parsed);
  return list;
}

async function run() {
  const folders = [
    { id: '1NcUgFmddKGFxrWfQOo91Ibdxbh-5jzXE', name: 'DM Ads' },
    { id: '1ldJQJF5gteESmTqJp6yA5IcbZhxrChHK', name: 'Profile Visit ads' }
  ];

  const results = {};

  for (const f of folders) {
    console.log(`Fetching ${f.name} (ID: ${f.id})...`);
    try {
      const html = await fetchFolderHTML(f.id);
      const parsed = parseIvd(html);
      if (parsed) {
        const items = scanItems(parsed);
        results[f.name] = items;
        console.log(`Found ${items.length} items in ${f.name}`);
        items.forEach((item, idx) => {
          console.log(`  [${idx}] ${item.name} (${item.mimeType})`);
        });
      } else {
        console.log(`No items parsed for ${f.name}`);
      }
    } catch (err) {
      console.error(`Error for ${f.name}:`, err);
    }
  }

  fs.writeFileSync('all_subfolders_items.json', JSON.stringify(results, null, 2));
}

run();
