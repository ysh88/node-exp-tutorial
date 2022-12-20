const { mkdir, existsSync, rmdir} = require('fs');

if (!existsSync('./new')) {
  mkdir('./new', err => {
    if (err) throw err;
    console.log('Dir created');
  });
}

if (existsSync('./new')) {
  rmdir('./new', err => {
    if (err) throw err;
    console.log('Dir removed');
  });
}
