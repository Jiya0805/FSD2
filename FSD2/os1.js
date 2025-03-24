var os = require("os")
console.log(os.platform()) // win32
console.log(os.tmpdir()) // C:\Users\LJENG\AppData\Local\Temp
console.log(os.hostname()) // 406-1-36
console.log(os.arch()) // x64
var fm = os.freemem()
console.log(fm)  // 3260850176 bytes
var d = fm/1024/1024/1024 // fm/1024 --> KB :: fm/1024/1024 --> MB
console.log(d)  // 3.0369033813476562 GB  :: Available Physical Memory 
// Cross Check this by searching "System Information" on Windows