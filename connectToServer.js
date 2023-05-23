// by right this should be client-side so you don't need to import
const WebSocket = require('ws');

// this code connects to our websocket server
// production should use 'wss' for more secure form of 'ws'
// local host, however, 'ws' works just fine
const ws = new WebSocket("ws://localhost:8082")


ws.addEventListener("open", ()=>{
    console.log("[Client] I am connected!")

    // send some sample data to web socket server
    ws.send("helloworld")

})

ws.addEventListener("message", e=> {
    // get back data object from web socket server
    console.log(e)
})