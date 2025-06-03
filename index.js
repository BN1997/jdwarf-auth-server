import express from "express";
import dotenv from "dotenv";
import firebaseAdmin from "firebase-admin";
import TokenController from "./controllers/TokenController.js";
import { firebaseConfig } from "./config/firebaseConfig.js";


class AppServer {
  constructor() {
    this.app = express();
    firebaseAdmin.initializeApp(firebaseConfig);
    dotenv.config();

    this.app.use(express.json());
    this.app.use('/token', TokenController);
  }

  initializeServer() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
    });
  }
}

const server = new AppServer();
server.initializeServer();
