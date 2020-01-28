//non-blocking, asynchronous way
 const fs = require('fs')

fs.readFile('./txt/start.txt','utf-8', (err,data) => {
    console.log(data);

})
console.log('will read file!')