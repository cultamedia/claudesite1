const fs = require('fs');
const path = require('path');

const required = ['dist/index.html', 'dist/assets'];
for (const item of required) {
  if (!fs.existsSync(path.join(process.cwd(), item))) {
    console.error(`Missing ${item}. This static package must include the prebuilt dist folder.`);
    process.exit(1);
  }
}
console.log('Static build is already prepared. No npm dependencies needed.');
