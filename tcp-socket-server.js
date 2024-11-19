const net = require("net");

const port = 5000;

const server = net.createServer((socket) => {
    console.log(`Client connected at ${getTime()}`);
    socket.on("data", (data) => {
        const strData = data.toString();
        console.log(`Server received: ${strData} at ${getTime()}`);
        socket.write(strData);
    });

    socket.on("end", () => {
        console.log(`Client disconnected at ${getTime()}`);
    });

    socket.on("error", (error) => {
        console.log(`Socket Error at ${getTime()}: ${error.message}`);
    });
});

server.on("error", (error) => {
    console.log(`Server Error at ${getTime()}: ${error.message}`);
});

server.listen(port, () => {
    console.log(`TCP socket server is running on port: ${port}`);
});

getTime= function(){
    const now = new Date()
    const hours = now.getHours() 
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const milliseconds = now.getMilliseconds()
    return `${hours}:${minutes}:${seconds}:${milliseconds}`
}