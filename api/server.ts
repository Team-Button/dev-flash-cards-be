import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import cors from "cors";

const server = express();

server.use(helmet(), cors(), express.json());

dotenv.config({
  path: ".env",
});

server.get("/", (req, res) => {
  res.send(`<h2>Server is Online</h2>`);
});

export default server;
