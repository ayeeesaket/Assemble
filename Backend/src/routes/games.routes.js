import { Router } from "express";
import verifyToken from "../middlewares/auth.middleware.js";
import { addAsphaltId, addBgmiId, addCodmId, addFreeFireId, addValorantId } from "../controllers/game.controller.js";

const router = Router();

router.route("/bgmi").post(verifyToken,addBgmiId);
router.route("/codm").post(verifyToken,addCodmId);
router.route("/valorant").post(verifyToken,addValorantId);
router.route("/freefire").post(verifyToken,addFreeFireId);
router.route("/asphalt").post(verifyToken,addAsphaltId)

export default router;