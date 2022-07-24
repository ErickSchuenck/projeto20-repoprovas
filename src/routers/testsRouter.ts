import { Router } from "express";
import {validateSchema} from "../middlewares/validateSchema.js"
import { testSchema } from "../schemas/schemas.js";
import { registerTest } from "../controllers/testController.js";


const testsRouter = Router();
testsRouter.post("/test", validateSchema(testSchema), registerTest);

export default testsRouter;
