import { Request, Response } from "express";
import * as testService from "../services/testService.js";

export async function registerTest (req: Request, res: Response) {
  const data =  req.body;
  await testService.registerTest(data)
  res.sendStatus(201)
}

export async function getTests(req: Request, res: Response) {
  const query = req.query.groupBy as string;
  let tests = (query === "disciplines" ? testService.getAllTestsBy("disciplines") : testService.getAllTestsBy("teachers"))
  
  res.status(200).send(tests);
}