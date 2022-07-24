import { Request, Response } from "express";
import * as testService from "../services/testService.js";

export async function registerTest (req: Request, res: Response) {
  const data =  req.body;
  await testService.registerTest(data)
}