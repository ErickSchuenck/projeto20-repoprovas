import joi from "joi";
export var loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});
export var signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required()
});
