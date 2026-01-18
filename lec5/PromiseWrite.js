let fs=require('fs/promises');

let path=__dirname+'/data2.txt';

fs.writeFile(path,"Write file content using promises")
.then(()=>{
    console.log("Done");
})
.catch((err)=>{
    console.log(err)
})