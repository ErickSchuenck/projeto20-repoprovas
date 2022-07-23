import { Router } from "express";
import {validateSchema} from "../middlewares/validateSchema.js"
import { loginSchema, signUpSchema } from "../schemas/schemas.js";
import { login, registerUser} from "../controllers/userControllers.js"


const accessRouter = Router();
accessRouter.post("/signUp", validateSchema(signUpSchema), registerUser);
accessRouter.post("/signIn", validateSchema(loginSchema), login);

export default accessRouter;
