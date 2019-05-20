const axios = require("axios");
const WebSocket = require("ws");

const ws = new WebSocket("ws://echo.websocket.org/signalr", {
  origin: "http://websocket.org"
});

ws.on("open", function open() {
  console.log("connected");
  ws.send(Date.now());
});

ws.on("close", function close() {
  console.log("disconnected");
});

ws.on("message", function incoming(data) {
  console.log(data);
  console.log(`Roundtrip time: ${Date.now() - data} ms`);

  setTimeout(function timeout() {
    ws.send(Date.now());
  }, 500);
});

axios.get("http://example.org").then(data => console.log(data.data));
