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
import prisma from "../src/config/database.js";
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            prisma.$executeRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        INSERT INTO terms (\"number\") VALUES (1);\n        INSERT INTO terms (\"number\") VALUES (2);\n        INSERT INTO terms (\"number\") VALUES (3);\n        INSERT INTO terms (\"number\") VALUES (4);\n        INSERT INTO terms (\"number\") VALUES (5);\n        INSERT INTO terms (\"number\") VALUES (6);\n        INSERT INTO categories (\"name\") VALUES ('Projeto');\n        INSERT INTO categories (\"name\") VALUES ('Pr\u00E1tica');\n        INSERT INTO categories (\"name\") VALUES ('Recupera\u00E7\u00E3o');\n        INSERT INTO teachers (\"name\") VALUES ('Diego Pinho');\n        INSERT INTO teachers (\"name\") VALUES ('Bruna Hamori');\n        INSERT INTO disciplines (\"name\", \"termId\") VALUES ('HTML e CSS', 1);\n        INSERT INTO disciplines (\"name\", \"termId\") VALUES ('JavaScript', 2);\n        INSERT INTO disciplines (\"name\", \"termId\") VALUES ('React', 3);\n        INSERT INTO disciplines (\"name\", \"termId\") VALUES ('Humildade', 1);\n        INSERT INTO disciplines (\"name\", \"termId\") VALUES ('Planejamento', 2);\n        INSERT INTO disciplines (\"name\", \"termId\") VALUES ('Autoconfian\u00E7a', 3);\n        INSERT INTO \"teachersDisciplines\" (\"teacherId\", \"disciplineId\") VALUES (1, 1);\n        INSERT INTO \"teachersDisciplines\" (\"teacherId\", \"disciplineId\") VALUES (1, 2);\n        INSERT INTO \"teachersDisciplines\" (\"teacherId\", \"disciplineId\") VALUES (1, 3); \n        INSERT INTO \"teachersDisciplines\" (\"teacherId\", \"disciplineId\") VALUES (2, 4);\n        INSERT INTO \"teachersDisciplines\" (\"teacherId\", \"disciplineId\") VALUES (2, 5);\n        INSERT INTO \"teachersDisciplines\" (\"teacherId\", \"disciplineId\") VALUES (2, 6);"], ["\n        INSERT INTO terms (\"number\") VALUES (1);\n        INSERT INTO terms (\"number\") VALUES (2);\n        INSERT INTO terms (\"number\") VALUES (3);\n        INSERT INTO terms (\"number\") VALUES (4);\n        INSERT INTO terms (\"number\") VALUES (5);\n        INSERT INTO terms (\"number\") VALUES (6);\n        INSERT INTO categories (\"name\") VALUES ('Projeto');\n        INSERT INTO categories (\"name\") VALUES ('Pr\u00E1tica');\n        INSERT INTO categories (\"name\") VALUES ('Recupera\u00E7\u00E3o');\n        INSERT INTO teachers (\"name\") VALUES ('Diego Pinho');\n        INSERT INTO teachers (\"name\") VALUES ('Bruna Hamori');\n        INSERT INTO disciplines (\"name\", \"termId\") VALUES ('HTML e CSS', 1);\n        INSERT INTO disciplines (\"name\", \"termId\") VALUES ('JavaScript', 2);\n        INSERT INTO disciplines (\"name\", \"termId\") VALUES ('React', 3);\n        INSERT INTO disciplines (\"name\", \"termId\") VALUES ('Humildade', 1);\n        INSERT INTO disciplines (\"name\", \"termId\") VALUES ('Planejamento', 2);\n        INSERT INTO disciplines (\"name\", \"termId\") VALUES ('Autoconfian\u00E7a', 3);\n        INSERT INTO \"teachersDisciplines\" (\"teacherId\", \"disciplineId\") VALUES (1, 1);\n        INSERT INTO \"teachersDisciplines\" (\"teacherId\", \"disciplineId\") VALUES (1, 2);\n        INSERT INTO \"teachersDisciplines\" (\"teacherId\", \"disciplineId\") VALUES (1, 3); \n        INSERT INTO \"teachersDisciplines\" (\"teacherId\", \"disciplineId\") VALUES (2, 4);\n        INSERT INTO \"teachersDisciplines\" (\"teacherId\", \"disciplineId\") VALUES (2, 5);\n        INSERT INTO \"teachersDisciplines\" (\"teacherId\", \"disciplineId\") VALUES (2, 6);"])));
            return [2 /*return*/];
        });
    });
}
main()["catch"](function (e) {
    console.log(e);
    process.exit(1);
})["finally"](function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var templateObject_1;
