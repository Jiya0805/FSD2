var http = require("http");
const url = require('url');

var server = http.createServer((req,res)=> 
    { 
        res.writeHead(200,{"content-type" : "text/html"});
        var data = url.parse(req.url,true).query
        var c = data.a*data.b
        res.write("<h1 style='color:blue;'>Welcome</h1>");
        res.write("Testing");
        // res.end(c.toString());  //The "chunk" argument must be of type string or an instance of Buffer or Uint8Array. Received type number (600) IF c is not string
        res.end(JSON.stringify(data)); //{"a":"20","b":"30"}
    }
).listen(5003);