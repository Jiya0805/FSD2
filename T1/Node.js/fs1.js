const fs = require("fs")

// fs.mkdirSync("node") --> if executed more tahn once : Error: EEXIST: file already exists, mkdir 'node'

fs.writeFileSync("node/rw.txt","Hello World!")

// node fs1.js --> to execute in terminal

fs.appendFileSync("node/rw.txt","\nWelcome") // it creates if doesn't exist and if exists it overwrites it

data = fs.readFileSync("node/rw.txt")
console.log(data) // encoded : <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21 0a 57 65 6c 63 6f 6d 65>
console.log(data.toString()) // decoded : Hello World!
//                                        Welcome

data = fs.readFileSync("node/rw.txt","utf-8")  // utf : Unicode Transformation Format
console.log(data) // decoded : Hello World!
//                             Welcome

fs.renameSync("node/rw.txt","node/test.txt")

// fs.unlinkSync("node/rw.txt") TypeError [ERR_INVALID_ARG_TYPE]: The "cb" argument must be of type function. Received undefined --> it is used to DELETE a file

fs.appendFileSync("node/rw.txt","Test")