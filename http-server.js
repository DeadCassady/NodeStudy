const http = require("http");

const server = http.createServer((req, res) => {
  const clientIp = req.socket.remoteAddress;
  const requestTime = new Date().toISOString();

  console.log(`[${requestTime}] Received request from ${clientIp}`);
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    console.log(`Received text: "${body}" from ${clientIp}`);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(body); // Echo back the received text
  });

  req.on("close", () => {
    console.log(`[${new Date().toISOString()}] Connection with ${clientIp} closed.`);
  });
});

server.listen(3000, () => {
  console.log("HTTP server is running on http://localhost:3000");
});