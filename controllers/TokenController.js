import TokenService from "../services/TokenService.js";

class TokenController {
    async authToken(req, res) {
        try {
            const { tokenId } = req.params;
            const { deviceId } = req.body;

            const result = await TokenService.getById(tokenId);
            if (!result.exists) return res.status(400);
            const token = result.data();

            if (!token.device_id) {
                Object.assign(token, { device_id: deviceId });

                await TokenService
                    .getDocById(tokenId)
                    .update({ device_id: deviceId });
            } else {
               const getTokenByDeviceId = await TokenService
                    .getCollection()
                    .where("device_id", "==", deviceId)
                    .get();

                if (getTokenByDeviceId.empty) return res.status(401);
            }

            return res.status(200).json({
                data: token
            })
        } catch (error) {
            return res.status(500).json({ 
                success: false, 
                message: "Error fetching token by tokenId" 
            });
        }
    }
}

export default TokenController = new TokenController();