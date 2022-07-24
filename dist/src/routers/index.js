import { Router } from "express";
import accessRouter from "./accessRouter.js";
import testsRouter from "./testsRouter.js";
var router = Router();
router.use(accessRouter);
router.use(testsRouter);
export default router;
