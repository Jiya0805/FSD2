var fs = require("fs")
var os = require("os")
var pm = require("path")

var path = os.tmpdir()
// fs.mkdirSync(path+"/AA")
path = path + "/AA/aa.txt"

var mem = os.freemem()/1024/1024/1024

if(mem>1){
    fs.writeFileSync(path,"Sufficient Memory")
}
else{
    fs.writeFileSync(path,"Insufficient Memory")
}

var platform = os.platform()
if(platform=="win32"){
    fs.appendFileSync(path,"\nYou are working on Windows")
}
else{
    fs.appendFileSync(path,"\nYou are not working on Windows")
}