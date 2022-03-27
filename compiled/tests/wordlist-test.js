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
Object.defineProperty(exports, "__esModule", { value: true });
exports.testWordlist = void 0;
var fetch = require('node-fetch');
var CONNECTION = 'localhost:23556';
function fetchWordlistCreation(token, name) {
    return fetch("http://" + CONNECTION + "/api/createWordlist", {
        method: 'post',
        body: {
            token: token,
            name: name
        }
    });
}
function fetchWordlistRenaming(token, wordlist, name) {
    return fetch("http://" + CONNECTION + "/api/renameWordlist", {
        method: 'post',
        body: {
            token: token,
            wordlist: wordlist,
            name: name
        }
    });
}
function fetchWordlistWordAdd(token, wordlist, words) {
    return fetch("http://" + CONNECTION + "/api/addWordToWordlist", {
        method: 'post',
        body: {
            token: token,
            wordlist: wordlist,
            words: words
        }
    });
}
function fetchWordlistWordRemove(token, wordlist, words) {
    return fetch("http://" + CONNECTION + "/api/removeWordFromWordlist", {
        method: 'post',
        body: {
            token: token,
            wordlist: wordlist,
            words: words
        }
    });
}
var TESTTOKEN = '60546838bca7bd2dacbfafd9bJtOCHrjiNqPKQ4W2OyO';
function testWordlist() {
    return __awaiter(this, void 0, void 0, function () {
        var r1, wl, error_1, error_2, error_3, error_4, error_5, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetchWordlistCreation(TESTTOKEN, 'TestList')];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, r1.json()];
                case 2:
                    wl = _a.sent();
                    console.log(wl);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1 + "\n" + r1.text());
                    return [3 /*break*/, 4];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, fetchWordlistRenaming(TESTTOKEN, wl._id, 'TestWordlistRenamed')];
                case 5:
                    r1 = _a.sent();
                    console.log(wl);
                    return [3 /*break*/, 7];
                case 6:
                    error_2 = _a.sent();
                    console.error(error_2 + "\n" + r1.text());
                    return [3 /*break*/, 7];
                case 7:
                    _a.trys.push([7, 9, , 10]);
                    return [4 /*yield*/, fetchWordlistWordAdd(TESTTOKEN, wl._id, ['СЛОВО', "ОЛОВО"])];
                case 8:
                    r1 = _a.sent();
                    console.log(wl);
                    return [3 /*break*/, 10];
                case 9:
                    error_3 = _a.sent();
                    console.error(error_3 + "\n" + r1.text());
                    return [3 /*break*/, 10];
                case 10:
                    _a.trys.push([10, 12, , 13]);
                    return [4 /*yield*/, fetchWordlistWordAdd(TESTTOKEN, wl._id, "ПЛОВО")];
                case 11:
                    r1 = _a.sent();
                    console.log(wl);
                    return [3 /*break*/, 13];
                case 12:
                    error_4 = _a.sent();
                    console.error(error_4 + "\n" + r1.text());
                    return [3 /*break*/, 13];
                case 13:
                    _a.trys.push([13, 15, , 16]);
                    return [4 /*yield*/, fetchWordlistWordRemove(TESTTOKEN, wl._id, "ОЛОВО")];
                case 14:
                    r1 = _a.sent();
                    console.log(wl);
                    return [3 /*break*/, 16];
                case 15:
                    error_5 = _a.sent();
                    console.error(error_5 + "\n" + r1.text());
                    return [3 /*break*/, 16];
                case 16:
                    _a.trys.push([16, 18, , 19]);
                    return [4 /*yield*/, fetchWordlistWordRemove(TESTTOKEN, wl._id, ["ОЛОВО", 'СЛОВО'])];
                case 17:
                    r1 = _a.sent();
                    console.log(wl);
                    return [3 /*break*/, 19];
                case 18:
                    error_6 = _a.sent();
                    console.error(error_6 + "\n" + r1.text());
                    return [3 /*break*/, 19];
                case 19: return [2 /*return*/];
            }
        });
    });
}
exports.testWordlist = testWordlist;
