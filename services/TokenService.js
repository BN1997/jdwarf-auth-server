import BaseService from "./abstract/BaseController.js";

class TokenService extends BaseService {
    constructor() {
        super("token");
    }

    async getTokenById(tokenId) {
        try {
            return await this.getCollection().doc(tokenId).get();
        } catch (error) {
            console.error("Error fetching token by tokenId:", error);
            throw new Error("Error fetching token by tokenId");
        }
    }

    async updateToken(tokenId, data) {
        try {
            return await this.getCollection().doc(tokenId).update(data);
        } catch (error) {
            console.error("Error updating token:", error);
            throw new Error("Error updating token");
        }
    }
}

export default TokenService = new TokenService();