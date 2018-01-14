var http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/pain"});
    res.end("hello world sample program");
}).listen(process.env.PORT || 3000);