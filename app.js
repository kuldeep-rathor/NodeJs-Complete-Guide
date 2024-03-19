const http = require("http");

const routes = require("./routes");

const server = http.createServer(routes);
// console.log(req.url , req.headers , req.method)
// console.log("Kuldeep")
//   const url = req.url;
//   const method = req.method;

server.listen(4000);
