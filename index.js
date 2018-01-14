var http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/pain"});
    res.send("hello world sample program");
}).listen(process.env.PORT);