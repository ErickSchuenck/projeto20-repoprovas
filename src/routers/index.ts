import { Router } from "express";
import accessRouter from "./accessRouter.js";
import testsRouter from "./testsRouter"

const router = Router();
router.use(accessRouter);
router.use(testsRouter);

export default router;