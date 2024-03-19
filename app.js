const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url , req.headers , req.method)

  // console.log("Kuldeep")
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter a Message </title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>'
    );
    return res.write("</html>");
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data' ,(chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.end('end', () => {
      const parseBody = Buffer.concat(body).toString();
      //   console.log(parseBody);
      const message = parseBody.split('=')[1];

      fs.writeFileSync('message.text', message);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Page</title></head>");
  res.write("<body><h1>Hello from Node.js server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);
