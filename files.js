//reading file
const fs=require("fs")
//console.log(fs)
// fs.readFile("./file.txt",(err,data)=>{
//     if(err){
//         console.log(err);

//     }
//     console.log(data.toString())
// });
// console.log("last ligne");
//writting file
// 
//directories
if(!fs.existsSync("./assets")){
    fs.mkdir("./assets",(err)=>{
        if(err){
            console.log(err);
        }
        console.log('the directory was created')
    })
    
}else{
    fs.rmdir("./assets",err=>{
        if(err){
            console.log(err);
        }
        console.log("folder deleted");
    })
}

//deleting files
if(fs.existsSync("./assets/delet.txt")){
 fs.unlink("./assets/delet.txt",err=>{
     if(err){
    console.log(err)}
    console.log("the file deleted")
 })
}
