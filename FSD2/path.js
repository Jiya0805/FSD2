var pm = require("path")
var addr = "D:/lju/abc/test/a.txt" // static path : random 
var dn = pm.dirname(addr)
console.log(dn) // D:/lju/abc/test
var en = pm.extname(addr)
console.log(en) // .txt
var bn = pm.basename(addr)
console.log(bn) //a.txt
var p = pm.parse(addr)
console.log(p) //{root: 'D:/', dir: 'D:/lju/abc/test', base: 'a.txt', ext: '.txt', name: 'a'}