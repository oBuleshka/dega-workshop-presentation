const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const srcBase = path.join(projectRoot, 'node_modules', 'reveal.js');
const outBase = path.join(projectRoot, 'assets', 'vendor', 'reveal');

function copyDirectory(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const directoriesToCopy = ['dist', 'plugin'];
for (const dir of directoriesToCopy) {
  const src = path.join(srcBase, dir);
  const dest = path.join(outBase, dir);
  copyDirectory(src, dest);
}

console.log('Reveal.js assets copied to assets/vendor/reveal');
