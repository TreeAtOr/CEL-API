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
var wordlist_1 = require("../../logic/wordlist");
var wordlistAPI = express_1.default();
/** CreateWordlist
  @api {post} /api/createWordlist
  @apiName CreateWordlist
  @apiGroup Wordlist

  @apiParam {String} token Client Token.
  @apiParam {String} name Wordlist name.
  @apiSucsess {Wordlist} Wordlist object

  */
wordlistAPI.post('/createWordlist', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _b = (_a = res).send;
                _d = (_c = JSON).stringify;
                return [4 /*yield*/, wordlist_1.createWordlist(req.client, req.body.name + '')];
            case 1:
                _b.apply(_a, [_d.apply(_c, [_e.sent()])]);
                return [2 /*return*/];
        }
    });
}); });
/** RenameWordlist
  @api {post} /api/renameWordlist
  @apiName RenameWordlist
  @apiGroup Wordlist

  @apiParam {String} token Client Token.
  @apiParam {String} wordlist Wordlist ID.
  @apiParam {String} name Wordlist new name.

  @apiSucsess {Wordlist} Wordlist object
  */
wordlistAPI.post('/renameWordlist', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, error_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 3, , 4]);
                client_1.checkWordlistAccess(req.client, req.body.wordlist);
                _b = (_a = res).send;
                _d = (_c = JSON).stringify;
                _e = wordlist_1.renameWordlist;
                return [4 /*yield*/, wordlist_1.getWordlist(req.body.wordlist)];
            case 1: return [4 /*yield*/, _e.apply(void 0, [_f.sent(), req.body.name + ''])];
            case 2:
                _b.apply(_a, [_d.apply(_c, [_f.sent()])]);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _f.sent();
                res.send(error_1.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/** TransferWordlist
  @api {post} /api/transferWordlist
  @apiName TransferWordlist
  @apiGroup Wordlist

  @apiParam {String} token Client Token.
  @apiParam {String} id new owner ID.
  @apiParam {String} wordlist Wordlist ID.

  @apiSucsess {Wordlist} Wordlist object
*/
wordlistAPI.post('/transferWordlist', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                client_1.checkWordlistAccess(req.client, req.body.wordlist);
                _b = (_a = res).send;
                _d = (_c = JSON).stringify;
                _e = wordlist_1.transferWordlist;
                return [4 /*yield*/, wordlist_1.getWordlist(req.body.wordlist)];
            case 1: return [4 /*yield*/, _e.apply(void 0, [_f.sent(), req.body.id])];
            case 2:
                _b.apply(_a, [_d.apply(_c, [_f.sent()])]);
                return [2 /*return*/];
        }
    });
}); });
/**Add word to list
  @api {post} /api/addWordsToWordlist
  @apiName TransferWordlist
  @apiGroup Wordlist

  @apiParam {String} token Client Token.
  @apiParam {String} words stringfied word array
  @apiParam {String} wordlist Wordlist ID.

  @apiSucsess {Wordlist} Wordlist object
*/
wordlistAPI.post('/addWordsToWordlist', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, error_2;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 3, , 4]);
                client_1.checkWordlistAccess(req.client, req.body.wordlist);
                _b = (_a = res).send;
                _d = (_c = JSON).stringify;
                _e = wordlist_1.addWordToWordlist;
                return [4 /*yield*/, wordlist_1.getWordlist(req.body.wordlist)];
            case 1: return [4 /*yield*/, _e.apply(void 0, [_f.sent(), req.body.words])];
            case 2:
                _b.apply(_a, [_d.apply(_c, [_f.sent()])]);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _f.sent();
                res.send(error_2.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/**Add word to list
  @api {post} /api/removeWordFromWordlist
  @apiName TransferWordlist
  @apiGroup Wordlist

  @apiParam {String} token Client Token.
  @apiParam {String} words stringfied word array
  @apiParam {String} wordlist Wordlist ID.

  @apiSucsess {Wordlist} Wordlist object
*/
wordlistAPI.post('/removeWordFromWordlist', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, error_3;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 3, , 4]);
                client_1.checkWordlistAccess(req.client, req.body.wordlist);
                _b = (_a = res).send;
                _d = (_c = JSON).stringify;
                _e = wordlist_1.removeWordFromWordlist;
                return [4 /*yield*/, wordlist_1.getWordlist(req.body.wordlist)];
            case 1: return [4 /*yield*/, _e.apply(void 0, [_f.sent(), req.body.words])];
            case 2:
                _b.apply(_a, [_d.apply(_c, [_f.sent()])]);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _f.sent();
                res.send(error_3.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/** DelateWordlist
  @api {post} /api/deleteWordlist
  @apiName DelateWordlist
  @apiGroup Wordlist

  @apiParam {String} token Client Token.
  @apiParam {String} wordlist Wordlist ID.

  @apiSucsess {Wordlist} Wordlist object
  */
wordlistAPI.post('/deleteWordlist', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, error_4;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 3, , 4]);
                client_1.checkWordlistAccess(req.client, req.body.wordlist);
                _b = (_a = res).send;
                _d = (_c = JSON).stringify;
                _e = wordlist_1.deleteWordlist;
                return [4 /*yield*/, wordlist_1.getWordlist(req.body.wordlist)];
            case 1: return [4 /*yield*/, _e.apply(void 0, [_f.sent()])];
            case 2:
                _b.apply(_a, [_d.apply(_c, [_f.sent()])]);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _f.sent();
                res.send(error_4.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = wordlistAPI;
