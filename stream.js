const { createReadStream, createWriteStream } = require('fs');

const rs = createReadStream('./files/lorem.txt', { encoding: 'utf8' });

const ws = createWriteStream('./files/new-lorem.txt');

rs.pipe(ws);
// rs.on('data', dataChunk => {
//   ws.write(dataChunk);
// });
