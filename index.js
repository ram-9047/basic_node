const http = require("http");
const PORT = 8000;

let server = http.createServer((req, res) => {
  //   res.end("My name is Ram.");
  let pathName = req.url;
  if (pathName == "/") {
    res.end("<h1>My Name is Ram.</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`sever listening at port ${PORT}`);
});
