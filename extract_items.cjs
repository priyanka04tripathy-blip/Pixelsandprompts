const fs = require('fs');

try {
  const content = fs.readFileSync('drive_summary.json', 'utf8');
  const parsed = JSON.parse(content);

  // Recursively search for objects or arrays that match the pattern:
  // [string ID, [string parentID], string name, string mimeType]
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
  console.log('Total items found:', list.length);
  list.forEach((item, idx) => {
    console.log(`[${idx}] Name: "${item.name}" | Type: "${item.mimeType}" | ID: "${item.id}" | Parents: ${JSON.stringify(item.parents)}`);
  });

  fs.writeFileSync('extracted_items.json', JSON.stringify(list, null, 2));
} catch (e) {
  console.error(e);
}
