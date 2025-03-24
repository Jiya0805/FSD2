var fs = require("fs")

fs.writeFile("Node.js/node/a.txt","hello",(err)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log("Written")
    }
})
console.log("Completed!")

fs.appendFile('Node.js/node/a.txt',"hi",(err)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log("Appended")
    }
})

fs.readFile('Node.js/node/a.txt',"utf-8",(err,data)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log(data)
    }
})
setTimeout(()=>{
    fs.readFile('Node.js/node/a.txt',"utf-8",(err,data)=>{
        if(err){
            console.error(err)
        }
        else{
            console.log(data)
        }
})},3000)

fs.rename("Node.js/node/a.txt","Node.js/node/a2.txt",()=>{
    console.log("Renamed")
})

// Error: ENOENT: no such file or directory, unlink 'D:\B2_43\T1\Node.js\node\a1.txt'
fs.unlink("Node.js/node/a.txt",err=>{
    if(err){
        console.error(err)
    }
    else{
        console.log("Deleted")
    }
})

