const express = require("express");
const dotenv = require("dotenv");

class AppServer {
  constructor() {
    this.app = express();
    dotenv.config();
  }

  initializeServer() {
    this.app.listen(this.port, () => {
      console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
    });
  }
}

const server = new AppServer();
server.initializeServer();
