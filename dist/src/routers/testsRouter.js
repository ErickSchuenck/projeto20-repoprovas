import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { testSchema } from "../schemas/schemas.js";
import { registerTest, getTests } from "../controllers/testController.js";
import { validateToken } from "../middlewares/validateToken.js";
var testsRouter = Router();
testsRouter.post("/test", validateSchema(testSchema), validateToken, registerTest);
testsRouter.get("/tests", validateToken, getTests);
export default testsRouter;
