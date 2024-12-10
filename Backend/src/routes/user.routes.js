import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import validationSchema from "../middlewares/zodValidator.middleware.js";
import { registerUserSchema } from "../utils/zodSchema/userValidatorSchema.js";

const router = Router();

router.route("/register").post(validationSchema(registerUserSchema), registerUser);

export default router;