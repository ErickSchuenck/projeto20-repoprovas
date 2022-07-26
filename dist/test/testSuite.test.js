var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import supertest from "supertest";
import app from "../src/app.js";
import prisma from "../src/config/database.js";
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$executeRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["TRUNCATE TABLE tests;"], ["TRUNCATE TABLE tests;"])))];
            case 1:
                _a.sent();
                return [4 /*yield*/, prisma.$disconnect()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var EMAIL = "".concat(new Date().getTime(), "@gmail.com"); // random email
var PASSWORD = "secretcode1234567890"; // example of password
var CONFIRMPASSWORD = PASSWORD; // matching password
var createUserInput = { email: EMAIL, password: PASSWORD, confirmPassword: CONFIRMPASSWORD }; // body to register user
var login = { email: EMAIL, password: PASSWORD }; // body to login as user
var token; // token that will be received as user logins
var testBody = {
    name: 'prova dificil',
    pdfUrl: 'https://http.cat/',
    categoryName: "Projeto",
    teacherId: 1,
    disciplineId: 1
};
describe("Access tests suite", function () {
    it("given an email, password and matching confirm password, create user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest(app).post("/signUp").send(createUserInput)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(201);
                    return [2 /*return*/];
            }
        });
    }); });
    it("given valid email and password, return token", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest(app).post("/signIn").send(login)];
                case 1:
                    response = _a.sent();
                    token = response.body.token;
                    expect(typeof response.body.token).toEqual('string');
                    expect(response.body.token.length).toBeGreaterThan(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it("given email and password which are already in use, fail to create", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest(app).post("/signUp").send(login)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(409);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Create tests test suite", function () {
    it("Given test data, and token create test", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest(app).post("/test").set('Authorization', "Bearer ".concat(token)).send(testBody)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(201);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Given test data without a token, fail create test", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest(app).post("/test").send(testBody)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Given test data that already exists, and a token fail create test", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest(app).post("/test").set('Authorization', "Bearer ".concat(token)).send(testBody)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(409);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Get tests test suite", function () {
    it('given no token, fail to get tests in db grouped by its teachers', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest(app)
                        .get("/tests?groupBy=teachers")];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("given the token, get all tests in db grouped by its teachers", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest(app)
                        .get("/tests?groupBy=teachers")
                        .set('Authorization', "Bearer ".concat(token))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it("given no token, fail to get tests in db grouped by its disciplines", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest(app)
                        .get("/tests?groupBy=disciplines")];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("given the token, get all tests in db grouped by its disciplines", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest(app)
                        .get("/tests?groupBy=disciplines")
                        .set('Authorization', "Bearer ".concat(token))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it("given the token, but with an incorrect query input, fail to get tests in db", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest(app)
                        .get("/tests?groupBy=incorrectInput")
                        .set('Authorization', "Bearer ".concat(token))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
});
var templateObject_1;
