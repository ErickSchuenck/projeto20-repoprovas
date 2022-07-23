import { Router } from "express";
import accessRouter from "./accessRouter.js";
var router = Router();
router.use(accessRouter);
export default router;
