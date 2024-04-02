import express from "express";
import expressWS from "express-ws";

const expressApp = express();
const expressWSInstance = expressWS(expressApp);
const app = expressWSInstance.app;

const PORT = 4500;

app.get("/", (_req, res) => {
  res.send("Server is running...");
});

app.ws("/", (ws, _req) => {
  ws.send("Connected to server");
  // TODO: Do something on connection open

  ws.on("message", (msg) => {
    // TODO: New message handlers
  });

  ws.on("close", (msg) => {
    // TODO: Close connection handler
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port!", PORT);
});
