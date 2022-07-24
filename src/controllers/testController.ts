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
  console.log('entrou1');
  if (query === "disciplines" ){
    console.log('entrou3');
    tests = await testService.getAllTestsBy("disciplines")
  }

  if (query === "teachers"){
    console.log('entrou2');
    tests = await testService.getAllTestsBy("teachers")
  }

  // if (query !== "teachers" && query !== "disciplines") {
  //   throw {
  //     status: 401,
  //     type: "Unauthorized", 
  //     message: "Incorrect input"
  //   }
  // }

  console.log(tests)
  res.status(200).send(tests);
}
