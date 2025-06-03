import TokenService from "../services/TokenService.js";

class TokenController {
    async getTokenById(req, res) {
        try {
            const { tokenId } = req.params;
            const token = await TokenService.getTokenById(tokenId);

            if (!token.exists) {
                return res.status(404).json({ 
                    success: false, 
                    message: "Token not found" 
                });
            }

            console.log("token", token.data())

            return res.status(200).json({ 
                success: true, 
                data: token.data() 
            });
        } catch (error) {
            console.error("Error fetching token by tokenId:", error);
            return res.status(500).json({ 
                success: false, 
                message: "Error fetching token by tokenId" 
            });
        }
    }

    async updateToken(req, res) {
        try {
            const { tokenId } = req.params;
            const data = req.body;

            await this.getCollection().doc(tokenId).update(data);
            return res.status(200).json({ 
                success: true, 
                message: "Token updated successfully" 
            });
        } catch (error) {
            console.error("Error updating token:", error);
            return res.status(500).json({ 
                success: false, 
                message: "Error updating token" 
            });
        }
    }
}

export default TokenController = new TokenController();