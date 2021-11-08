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
fs.writeFile("./file2.txt","coucou",()=>{
    console.log('the file was writting')
});
//directories
fs.mkdir("./assets",(err)=>{
    if(err){
        console.log(err);
    }
    console.log('the directory was created')
})
// problem d'exictence
//