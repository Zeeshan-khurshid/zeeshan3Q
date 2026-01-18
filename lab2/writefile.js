let fs = require('fs');

//let path=D:\web development\BackEnd\lab2
let path = __dirname + '/data.txt';

fs.writeFile(path, "hello learning filesystem.", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("done successfully  ..........");
    }
})