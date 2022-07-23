export function validateSchema(schema) {
    return function (req, res, next) {
        var error = schema.validate(req.body, { abortEarly: false }).error;
        if (error) {
            return res.status(422).send(error.details.map(function (detail) { return detail.message; }));
        }
        next();
    };
}
;
export function checkIfConfirmPasswordMatches(req, res, next) {
    var _a = req.body, password = _a.password, confirmPassword = _a.confirmPassword;
    if (password !== confirmPassword) {
        throw {
            status: 400,
            type: 'Bad Request',
            message: 'Password and confirm password do not match'
        };
    }
}
