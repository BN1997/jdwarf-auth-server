import BaseService from "./abstract/BaseService.js";

class TokenService extends BaseService {
    constructor() {
        super("token");
    }

    async getTokenById(tokenId) {
        try {
            return await this.getCollection().doc(tokenId).get();
        } catch (error) {
            console.error("Error fetching token by tokenId:", error);
            throw error;
        }
    }
}

export default new TokenService();