
const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/micro-app-v1/runtime.js',
    './dist/micro-app-v1/polyfills.js',
    './dist/micro-app-v1/scripts.js',
    './dist/micro-app-v1/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/test-element.js');
  await fs.copy('./dist/micro-app-v1/assets', 'elements/assets');
 
})();