import BaseRouter from "./abstract/BaseRouter.js";
import TokenController from "../controllers/TokenController.js";

class TokenRouter extends BaseRouter {
  constructor() {
    super();
  }

  registerRoutes() {
    this.router.post("/auth/:tokenId", TokenController.authToken.bind(TokenController));
  }
}

export default TokenRouter = new TokenRouter();