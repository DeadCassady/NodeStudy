const net = require("net");

const host = "127.0.0.1";
const port = 5000;
const message = 'The Message'

const client = net.createConnection(port, host, () => {
    console.time('add')
    console.log("Connected");
    client.write(message);
});

client.on("data", (data) => {
    console.log(`Client received: ${data}`);
    console.timeEnd('add')
    if(data==message){
        console.log("The message hasn't been altered")
    }

});

client.on("error", (error) => {
    console.log(`Error: ${error.message}`); 
});

client.on("close", () => {
    console.log("Connection closed");
});