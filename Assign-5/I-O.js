const fs = require('fs');

// Synchronous file read
const startSync = new Date();
const dataSync = fs.readFileSync('myfile.txt', 'utf8');
const endSync = new Date();
console.log(`Synchronous read took ${endSync - startSync} ms`);

// Asynchronous file read
const startAsync = new Date();
fs.readFile('myfile.txt', 'utf8', (err, dataAsync) => {
  if (err) throw err;
  const endAsync = new Date();
  console.log(`Asynchronous read took ${endAsync - startAsync} ms`);
});

console.log('Reading file...');
