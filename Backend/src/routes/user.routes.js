import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
<<<<<<< HEAD
import validationSchema from "../middlewares/zodValidator.middleware.js";
import { registerUserSchema } from "../utils/zodSchema/userValidatorSchema.js";

const router = Router();

router.route("/register").post(validationSchema(registerUserSchema), registerUser);
=======

const router = Router()

router.route("/register").post(registerUser)
>>>>>>> e3225ff3aec7d06d80cfcae9fcd4c35f29cea09d

export default router;