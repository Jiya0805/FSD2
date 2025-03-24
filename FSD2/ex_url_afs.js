var fs = require("fs")
var url = require("url")

var addr = "https://localhost:8080/test/about.html?year=2025&month=march#staff"

var p = url.parse(addr,true)
var query = JSON.stringify(p.query)

fs.writeFile("D:/Kajal/FSD2/a.txt",query,(e)=>{
    if(e){
        console.log(e)
    }
    else{
        console.log("write success")
    }
})

console.log("Completed !")