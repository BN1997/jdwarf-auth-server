import BaseController from "./abstract/BaseController.js";
import TokenService from "../services/TokenService.js";

class TokenController extends BaseController {
  constructor() {
    super();
  }

  registerRoutes() {
    this.router.get("/getById", TokenService.getById.bind(this));
  }

  getRouter() {
    return this.router;
  }
}

export default TokenController = new TokenController();