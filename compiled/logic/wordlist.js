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
exports.getWordlist = exports.deleteWordlist = exports.removeWordFromWordlist = exports.addWordToWordlist = exports.renameWordlist = exports.transferWordlist = exports.createWordlist = void 0;
var mongodb_1 = require("mongodb");
var mongo_1 = require("../database/mongo");
var cel_array_1 = require("../datatypes/cel-array");
var client_types_1 = __importDefault(require("../datatypes/client-types"));
var wordlist_types_1 = __importDefault(require("../datatypes/wordlist-types"));
var client_errors_1 = require("../errors/client-errors");
function createWordlist(client, name) {
    return __awaiter(this, void 0, void 0, function () {
        var wordlist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wordlist_types_1.default.create({ title: name, owner: client._id })];
                case 1:
                    wordlist = _a.sent();
                    client.wordlists.push(wordlist._id);
                    client.__v++;
                    return [4 /*yield*/, client.save()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, wordlist.save()];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createWordlist = createWordlist;
function transferWordlist(Wordlist, newOwnerID) {
    return __awaiter(this, void 0, void 0, function () {
        var own, cli;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client_types_1.default.findById(Wordlist.owner)];
                case 1:
                    own = _a.sent();
                    if (!own)
                        throw new client_errors_1.InvalidID(Wordlist.owner);
                    return [4 /*yield*/, client_types_1.default.findById(newOwnerID)];
                case 2:
                    cli = _a.sent();
                    if (!cli)
                        throw new client_errors_1.InvalidID(newOwnerID);
                    own.wordlists.splice(own.wordlists.indexOf(Wordlist._id), 1);
                    cli.wordlists.push(Wordlist._id);
                    Wordlist.owner = newOwnerID;
                    return [4 /*yield*/, cli.replaceOne(cli)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, own.replaceOne(own)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, mongo_1.save(Wordlist)];
                case 5:
                    _a.sent();
                    return [2 /*return*/, Wordlist];
            }
        });
    });
}
exports.transferWordlist = transferWordlist;
function renameWordlist(Wordlist, title) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Wordlist.title = title;
                    return [4 /*yield*/, mongo_1.save(Wordlist)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, Wordlist];
            }
        });
    });
}
exports.renameWordlist = renameWordlist;
function addWordToWordlist(Wordlist, word) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof word === 'string') {
                        Wordlist.words.push(word);
                    }
                    else {
                        Wordlist.words.concat(word);
                    }
                    Wordlist.__v++;
                    return [4 /*yield*/, mongo_1.save(Wordlist)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, Wordlist];
            }
        });
    });
}
exports.addWordToWordlist = addWordToWordlist;
function removeWordFromWordlist(Wordlist, word) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof word === 'string') {
                        cel_array_1.findAndDelete(Wordlist.words, word);
                    }
                    else {
                        word.forEach(function (element) {
                            cel_array_1.findAndDelete(Wordlist.words, element);
                        });
                    }
                    return [4 /*yield*/, mongo_1.save(Wordlist)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, Wordlist];
            }
        });
    });
}
exports.removeWordFromWordlist = removeWordFromWordlist;
function deleteWordlist(Wordlist) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Wordlist.delete()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, Wordlist];
            }
        });
    });
}
exports.deleteWordlist = deleteWordlist;
function getWordlist(id) {
    return __awaiter(this, void 0, void 0, function () {
        var wl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wordlist_types_1.default.findById(id)];
                case 1:
                    wl = _a.sent();
                    if (!wl) {
                        throw new client_errors_1.InvalidID(new mongodb_1.ObjectId(id));
                    }
                    else {
                        return [2 /*return*/, wl];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getWordlist = getWordlist;
