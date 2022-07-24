import joi from "joi";
export var loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});
export var signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref("password")
});
export var testSchema = joi.object({
    name: joi.string().required(),
    pdfUrl: joi.string().required(),
    categoryName: joi.string().required(),
    disciplineId: joi.number().integer().required(),
    teacherId: joi.number().integer().required()
});
