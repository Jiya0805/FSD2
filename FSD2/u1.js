var url = require("url")

var addr = "https://localhost:8080/test/about.html?year=2025&month=march#staff"
var p = url.parse(addr)
console.log(p) 
// Url {
//     protocol: 'https:',
//     slashes: true,     
//     auth: null,
//     host: 'localhost:8080',
//     port: '8080',
//     hostname: 'localhost',
//     hash: '#staff',
//     search: '?year=2025&month=march',
//     query: 'year=2025&month=march',
//     pathname: '/test/about.html',
//     path: '/test/about.html?year=2025&month=march',
//     href: 'https://localhost:8080/test/about.html?year=2025&month=march#staff'
//   }
 
// var addr = "https:/localhost:8080/test/about.html?year=2025&month=march#staff"
// Url {protocol: 'https:', slashes: null, auth: null, host: null, port: null, …}

var p = url.parse(addr,true)
console.log(p) 
// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:8080',
//     port: '8080',
//     hostname: 'localhost',
//     hash: '#staff',
//     search: '?year=2025&month=march',
//     query: [Object: null prototype] { year: '2025', month: 'march' },
//     pathname: '/test/about.html',
//     path: '/test/about.html?year=2025&month=march',
//     href: 'https://localhost:8080/test/about.html?year=2025&month=march#staff'
//   }