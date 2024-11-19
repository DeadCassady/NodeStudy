const dgram = require("dgram");
const client = dgram.createSocket("udp4");
const host = "127.0.0.1";
const port = 4000;
console.time('add')
const message = Buffer.from("Hello, server!");

client.send(message, 0, message.length, port, host, (err) => {
  
  if (err) console.error("Send error:", err.message);
  else console.log("Message sent to server");
});

client.on("message", (msg, rinfo) => {
  console.log(`Received from server (${rinfo.address}:${rinfo.port}):`, msg.toString());
  console.timeEnd('add')
});

client.on("error", (err) => {
  console.error("Client error:", err.message);
  client.close();
});
