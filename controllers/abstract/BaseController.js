import express from "express";

export default class BaseController {
    constructor() {
        this.router = express.Router();
        this.registerRoutes();
    }

  registerRoutes() {
        throw new Error("Method 'registerRoutes' must be implemented.");
    }

    getRouter() {
        return this.router;
    }
}
