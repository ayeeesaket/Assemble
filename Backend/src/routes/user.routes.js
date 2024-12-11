import { Router } from "express";
import { registerUser, loginUser, logoutUser, verifyCode } from "../controllers/user.controller.js";
import { registerUserSchema, loginUserSchema, verifyCodeSchema } from "../utils/zodSchema/userValidatorSchema.js";
import validationSchema from "../middlewares/zodValidator.middleware.js";
import verifyToken from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(validationSchema(registerUserSchema), registerUser);
router.route("/login").post(validationSchema(loginUserSchema), loginUser);
router.route("/verifyCode").post(validationSchema(verifyCodeSchema) ,verifyCode);

// secured routes
router.route("/logout").post(verifyToken, logoutUser);

export default router;