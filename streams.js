const fs=require("fs");
const readstream=fs.createReadStream("./file.txt",{encoding:"utf8"})
//const writestream =fs.createWriteStream("./file4.txt")
readstream.on("data",(chunck)=>{
    console.log("\nchunck*************\n");
    console.log(chunck)
//    writestream.write("\n go!\n")
 //   writestream.write(chunck);
})
//readstream.pipe(writestream);

