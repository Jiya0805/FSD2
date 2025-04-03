var http = require("http");
const url = require('url');

http.createServer((req,res)=> 
    { 
        if(req.url=="/"){
            res.writeHead(200,{"content-type" : "text/html"});
            res.write("<ul><li><a href='/about'>About</a></li><li><a href='/contact'>Contact</a></li></ul>");
            res.end();
        }
        else if(req.url=="/about"){
            res.writeHead(200,{"content-type" : "text/html"});
            res.write("<h1 style='color:blue;'>Welcome</h1>");
            res.end();
        }
        else if(req.url=="/contact"){
            var id = {"MN":"9998765435","eid":"lj@gmail.com"}
            res.writeHead(200,{"content-type" : "text/html"});
            res.write("<h1 style='color:blue;align;center'>Welcome</h1>");
            res.end("Mobile Number "+ id.MN);
        }
        else{
            res.writeHead(404,{"content-type" : "text/plain"});
            res.end("Page Not Found");
        }
    }
).listen(5003);