import { Request, Response } from "express";
import * as testService from "../services/testService.js";

export async function registerTest (req: Request, res: Response) {
  const data =  req.body;
  await testService.registerTest(data)
  res.sendStatus(201)
}

export async function getTests(req: Request, res: Response) {
  const query = req.query.groupBy as string;
  let tests = {};
  if (query !== "teachers" && query !== "disciplines") {
    throw {
      status: 401,
      type: "Unauthorized", 
      message: "Incorrect input"
    }
  }

  if (query === "disciplines" ){
    tests = await testService.getAllTestsBy("disciplines")
  }

  if (query === "teachers"){
    tests = await testService.getAllTestsBy("teachers")
  }

  res.status(200).send(tests);
}
