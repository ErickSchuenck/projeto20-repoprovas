import { Router } from "express";
import {validateSchema, checkIfConfirmPasswordMatches} from "../middlewares/validateSchema.js"
import { loginSchema, signUpSchema } from "../schemas/schemas.js";
import {registerUser, login} from "../controllers/userControllers.js"


const accessRouter = Router();
accessRouter.post("/signUp", validateSchema(signUpSchema), checkIfConfirmPasswordMatches, registerUser);
accessRouter.post("/signIn", validateSchema(loginSchema), login);

export default accessRouter;