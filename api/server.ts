import express from "express";
import configWare from "./server-config";

const server = express();

configWare(server);

server.get("/", (req, res) => {
  res.send(`<h2>Server is Online</h2>`);
});

export default server;
