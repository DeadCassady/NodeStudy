const dgram = require("dgram");

const udpServer = dgram.createSocket("udp4");

udpServer.on("message", (msg, rinfo) => {
  console.log(`Received from ${rinfo.address}:${rinfo.port} at ${getTime}:`, msg.toString());
  udpServer.send(`Echo at ${getTime}: ${msg}`, rinfo.port, rinfo.address, (err) => {
    if (err) console.error("Error sending response:", err.message);
  });
});

udpServer.on("error", (err) => {
  console.error("Server error:", err.message);
  udpServer.close();
});

udpServer.bind(4000, () => {
  console.log(`UDP server listening on port 4000 at ${getTime}`);
});

getTime= function(){
    const now = new Date()
    const hours = now.getHours() 
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const milliseconds = now.getMilliseconds()
    return `${hours}:${minutes}:${seconds}:${milliseconds}`
}