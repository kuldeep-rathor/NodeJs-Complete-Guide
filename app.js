const http = require('http')

const server =http.createServer((res, req)=>{
    console.log(req)
    console.log("Kuldeep")
});

server.listen(4000)