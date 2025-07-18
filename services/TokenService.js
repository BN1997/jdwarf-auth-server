import BaseService from "./abstract/BaseController.js";

class TokenService extends BaseService {
    constructor() {
        super("token");
    }
}

export default TokenService = new TokenService();