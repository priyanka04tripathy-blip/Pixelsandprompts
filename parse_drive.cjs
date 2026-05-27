const fs = require('fs');

try {
  const html = fs.readFileSync('drive_temp.html', 'utf8');

  // Find window['_DRIVE_ivd']
  const ivdRegex = /window\['_DRIVE_ivd'\]\s*=\s*'([^']+)'/;
  const match = html.match(ivdRegex);
  if (match) {
    let content = match[1];
    // Decodes \xHH sequences
    content = content.replace(/\\x([0-9A-Fa-f]{2})/g, (m, g) => String.fromCharCode(parseInt(g, 16)));
    fs.writeFileSync('drive_extracted.json', content);
    console.log('Successfully saved to drive_extracted.json');
    
    // Parse it as JSON or inspect its strings
    try {
      const parsed = JSON.parse(content);
      console.log('Parsed JSON root size:', parsed.length);
      // Write human readable summary
      fs.writeFileSync('drive_summary.json', JSON.stringify(parsed, null, 2));
    } catch (err) {
      console.log('Failed to parse as JSON directly, but wrote string:', content.substring(0, 500));
    }
  } else {
    console.log('No _DRIVE_ivd found');
  }
} catch (e) {
  console.error(e);
}
