import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import cors from "cors"
import path from 'path';
import { fileURLToPath } from 'url';
import Sockets from "./sockets.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class Server {
  constructor() {
    this.app = express();
    this.port = 4000;
    this.server = http.createServer(this.app);

    this.io = new SocketServer(this.server, {});

    this.sockets = new Sockets(this.io);
  }

  middlewares() {
    this.app.use(express.static(path.join(__dirname, '../public')));
    this.app.use(cors())
    
    this.app.get("/ultimos", (_req, res) => {
      res.send({
        lastThirdteen: this.sockets.ticketList.ultimos13,
      })
    })
  }

  execute() {
    // init middls
    this.middlewares()

    // init sockets
    // this.configSockets();

    // init server
    this.server.listen(this.port);
    console.log(`Server on port localhost:${this.port}`);
  }
}
