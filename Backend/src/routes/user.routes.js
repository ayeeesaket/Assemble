import { Router } from "express";
import { registerUser, loginUser, logoutUser, verifyCode, changeUsername, changePassword ,addDetails, changeEmail, verifyNewEmail} from "../controllers/user.controller.js";
import { registerUserSchema, loginUserSchema, verifyCodeSchema, changePasswordSchema, changeUsernameSchema } from "../utils/zodSchema/userValidatorSchema.js";
import validationSchema from "../middlewares/zodValidator.middleware.js";
import verifyToken from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(validationSchema(registerUserSchema), registerUser);
router.route("/login").post(validationSchema(loginUserSchema), loginUser);
router.route("/verifyCode").post(validationSchema(verifyCodeSchema) ,verifyCode);

// secured routes
router.route("/logout").post(verifyToken, logoutUser);
router.route("/changeUsername").post(verifyToken, validationSchema(changeUsernameSchema), changeUsername);
router.route("/changePassword").post(verifyToken,validationSchema(changePasswordSchema), changePassword);
router.route("/addDetails").post(verifyToken, addDetails)
router.route("/changeEmail").post(verifyToken ,changeEmail)
router.route("/verifyNewEmail").post(verifyToken,verifyNewEmail)

export default router;