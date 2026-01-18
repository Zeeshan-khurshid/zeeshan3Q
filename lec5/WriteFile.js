let fs=require('fs');

// let path="D:\web development\BackEnd\lec5"
// console.log(__dirname);

let path=__dirname+'/data.txt';

fs.writeFile(path,"learning node js fs writeFile",(err)=>{
    if(err)
        console.log(err)
    else
        console.log("done");
})