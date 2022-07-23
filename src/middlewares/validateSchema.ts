import { Request, Response, NextFunction } from "express";

export function validateSchema(schema: any) {
    return (req: Request, res: Response, next: NextFunction) => { 
      const {error} = schema.validate(req.body, {abortEarly: false});
      if (error) {
        return res.status(422).send(error.details.map((detail: { message: any; }) => detail.message));
      }
      next();
    }
};

export function checkIfConfirmPasswordMatches(req : Request, res: Response, next: NextFunction){
  const {password, confirmPassword} = req.body;
  if (password !== confirmPassword) {
    throw {
      status: 400,
      type: 'Bad Request',
      message: 'Password and confirm password do not match'
    }
  }
}