import joi from "joi";

export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
})

export const signUpSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.ref("password")
})

export const testSchema = joi.object({
  name: joi.string().required(),
  pdfUrl: joi.string().required(),
  categoryName: joi.string().required(),
  disciplineId: joi.number().integer().required(),
  teacherId: joi.number().integer().required()
})