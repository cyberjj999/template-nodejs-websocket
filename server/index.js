const WebSocket = require("ws");
// specify port to connect to
const wss = new WebSocket.Server({ port: 8082 });

// here we have a simple websocket server set up
// type of event is 'on connection', ws callback function (ws stands for single connection object here)

// Runs on each connection, i.e. if user open 10 tabs to localhost which makes a websocekt requesst 10 times, the 'ws => {}' callback will run 10 times.
wss.on("connection", (ws) => {
	console.log("New client connected!");

	// Runs everytime it receives a request from user
	ws.on("message", (data) => {
		// In actual use-case, you may run some algo here and return the value, but here we will return a simple JSON object
		console.log(`Client has sent us some data:\n '${data}'`);

        // return data transformed to uppercase - sample algo
        ws.send(data.toString().toUpperCase());
	});

	// Runs everytime the user closes the connection
	ws.on("close", () => {
		console.log("Client has disconnected!");
	});
});
