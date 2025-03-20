// 1 
const fs = require("fs")

fs.writeFileSync("node/ex.txt","50 -1 99 100 60 71 0 -2")

data = fs.readFileSync("node/ex.txt","utf-8")
console.log(data)
         
a = data.split(" ")
console.log(a.sort((a,b)=>a-b))

fs.writeFileSync("node/ex1.txt",data)
fs.appendFileSync("node/ex1.txt","\nHello Student")

fs.unlink("node/ex1.txt") 