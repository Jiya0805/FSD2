var http = require("http")
var server = http.createServer((req,res)=> 
    { 
        // res.writeHead(200,{"content-type" : "text/plain"}); <h1 style='color:red;'>Welcome</h1>Testing
        res.writeHead(200,{"content-type" : "text/html"});
        res.write("<h1 style='color:red;'>Welcome</h1>");
        res.write("Testing");
        res.end();
    }
)
server.listen(5001,()=>console.log("Server Started"))