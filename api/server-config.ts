import { Express } from "express";
import express from "express";
import helmet from "helmet";
import cors from "cors";

export default function (server: Express) {
  server.use(helmet(), cors(), express.json());
}
