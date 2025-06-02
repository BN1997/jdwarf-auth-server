import express from "express";
import dotenv from "dotenv";
import firebaseAdmin from "firebase-admin";
import { firebaseConfig } from "./config/firebaseConfig.js";

class AppServer {
  constructor() {
    this.app = express();
    firebaseAdmin.initializeApp(firebaseConfig);
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
