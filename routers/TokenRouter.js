import BaseRouter from "./abstract/BaseRouter.js";
import TokenController from "../controllers/TokenController.js";

class TokenRouter extends BaseRouter {
  constructor() {
    super();
  }

  registerRoutes() {
    this.router.get("/getById/:tokenId", TokenController.getTokenById.bind(TokenController));
    this.router.post("/token", TokenController.updateToken.bind(TokenController));
  }
}

export default TokenRouter = new TokenRouter();