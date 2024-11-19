const http = require("http");

const textToSend = "Hello, HTTP server!";
const startTime = Date.now();

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
    "Content-Length": textToSend.length,
  },
};

const req = http.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    const endTime = Date.now();
    console.log(`Sent: "${textToSend}"`);
    console.log(`Received: "${data}"`);
    console.log(`Matched: ${data === textToSend}`);
    console.log(`Round-trip time: ${endTime - startTime} ms`);
  });
});

req.on("error", (err) => {
  console.error("Request error:", err.message);
});

req.write(textToSend);
req.end();