console.log('This is the first app');

const fs = require('fs');
// sync write to the new file
fs.writeFileSync('Hello.txt', 'Hello text');