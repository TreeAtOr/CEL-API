"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var client_1 = require("../../logic/client");
var learning_1 = require("../../logic/learning");
var student_1 = require("../../logic/student");
var wordlist_1 = require("../../logic/wordlist");
var learningAPI = express_1.default();
learningAPI.use(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                client_1.checkStudentAccess(req.client, req.body.student);
                _a = req;
                return [4 /*yield*/, student_1.getStudent(req.body.student)];
            case 1:
                _a.student = _b.sent();
                next();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                res.send(error_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
  @api {post} /api/learn/addWordlistToStudent
  @apiName addWordlistToStudent
  @apiGroup Learning

  @apiParam {String} token
  @apiParam {String} student Student id.
  @apiParam {String} wordlist Wordlist to add.

  @apiSucsess {Student} Student Obj
*/
learningAPI.post('/addWordlistToStudent', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, error_2;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 2, , 3]);
                _b = (_a = res).send;
                _c = learning_1.addWordlistToStudent;
                _d = [req.student];
                return [4 /*yield*/, wordlist_1.getWordlist(req.body.wordlist)];
            case 1:
                _b.apply(_a, [_c.apply(void 0, _d.concat([_e.sent()]))]);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _e.sent();
                res.send(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
  @api {post} /api/learn/getMarked
  @apiName setWordlist
  @apiGroup Learning

  @apiParam {String} token
  @apiParam {String} student Student id.

  @apiSucsess {Array<WordmarkRow>} Student Obj
*/
learningAPI.post('/getMarked', function (req, res) {
    try {
        res.send(learning_1.getWordmarks(req.student));
    }
    catch (error) {
        res.send(error);
    }
});
learningAPI.post('/');
exports.default = learningAPI;
