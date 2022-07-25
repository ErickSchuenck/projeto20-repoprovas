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
import * as testRepository from "../repositories/testRepository.js";
export function registerTest(data) {
    return __awaiter(this, void 0, void 0, function () {
        var name, pdfUrl, categoryName, disciplineId, teacherId, categoryId, teacherDisciplineId, insertInDb;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = data.name, pdfUrl = data.pdfUrl, categoryName = data.categoryName, disciplineId = data.disciplineId, teacherId = data.teacherId;
                    verifyTestUniqueness(name);
                    return [4 /*yield*/, testRepository.getCategoryIdByCategoryName(categoryName)];
                case 1:
                    categoryId = _a.sent();
                    return [4 /*yield*/, verifyTeacherDisciplineExistance(teacherId, disciplineId)];
                case 2:
                    teacherDisciplineId = _a.sent();
                    insertInDb = { name: name, pdfUrl: pdfUrl, categoryId: categoryId, teacherDisciplineId: teacherDisciplineId };
                    testRepository.insertTest(insertInDb);
                    return [2 /*return*/];
            }
        });
    });
}
function verifyTeacherDisciplineExistance(teacherId, disciplineId) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.getTeacherDisciplineByTeacherAndDisciplineIds(teacherId, disciplineId)];
                case 1:
                    result = _a.sent();
                    if (!result) {
                        throw {
                            status: 404,
                            type: 'not found',
                            message: 'This teacher is not associated with this subject, please double check the input'
                        };
                    }
                    return [2 /*return*/, result.id];
            }
        });
    });
}
export function getAllTestsBy(property) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    response = {};
                    if (!(property === "disciplines")) return [3 /*break*/, 2];
                    return [4 /*yield*/, testRepository.getTestsByDiscipline()];
                case 1:
                    response = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    response = testRepository.getTestsByTeacher();
                    _a.label = 3;
                case 3: return [2 /*return*/, response];
            }
        });
    });
}
function verifyTestUniqueness(name) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.getTest(name)];
                case 1:
                    result = _a.sent();
                    if (result) {
                        throw {
                            status: 400,
                            type: 'bad request',
                            message: 'This test already exists'
                        };
                    }
                    return [2 /*return*/];
            }
        });
    });
}
