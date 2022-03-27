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
exports.internalTest = void 0;
var client_1 = require("../logic/client");
var student_1 = require("../logic/student");
var wordlist_1 = require("../logic/wordlist");
function generateWordlistID(max_size) {
    var str = "";
    for (var i = 0; i < max_size; i++) {
        var digit = Math.floor(Math.random() * 16);
        switch (digit) {
            case 10:
                str += "a";
                break;
            case 11:
                str += "b";
                break;
            case 12:
                str += "c";
                break;
            case 13:
                str += "d";
                break;
            case 14:
                str += "e";
                break;
            case 15:
                str += "f";
                break;
            default:
                str += 48 + Math.floor(Math.random() * 16);
        }
    }
    return str;
}
function internalTest() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1, error_2, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log('Начато тестирование клиентского функционала');
                    return [4 /*yield*/, testClientFunctions(100)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Ошибка при тестировании функционала клиента\n' + error_1);
                    return [3 /*break*/, 3];
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    console.log('Начато тестирование функционала вордлиста');
                    return [4 /*yield*/, testWordlistFunctions(100)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error('Ошибка при тестировании функционала вордлиста\n' + error_2);
                    return [3 /*break*/, 6];
                case 6:
                    _a.trys.push([6, 8, , 9]);
                    console.log('Начато тестирование функционала студента');
                    return [4 /*yield*/, testStudentFunctions(100)];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 8:
                    error_3 = _a.sent();
                    console.error('Ошибка при тестировании функционала студента\n' + error_3);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.internalTest = internalTest;
function testClientFunctions(count) {
    return __awaiter(this, void 0, void 0, function () {
        var tokens, index, _a, _b, clients, index, _c, _d, index, error_4;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    tokens = new Array();
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 14, , 15]);
                    index = 0;
                    _e.label = 2;
                case 2:
                    if (!(index < count)) return [3 /*break*/, 5];
                    _b = (_a = tokens).push;
                    return [4 /*yield*/, client_1.addClient("\u0428\u041B\u0401\u041F\u0410-Client " + count + "#" + index, 'Мятные Пряники')];
                case 3:
                    _b.apply(_a, [(_e.sent()).token]);
                    _e.label = 4;
                case 4:
                    index++;
                    return [3 /*break*/, 2];
                case 5:
                    console.log('   1.Создание клиентов прошло успешно');
                    clients = new Array();
                    index = 0;
                    _e.label = 6;
                case 6:
                    if (!(index < count)) return [3 /*break*/, 9];
                    _d = (_c = clients).push;
                    return [4 /*yield*/, client_1.getClientByToken(tokens[index])];
                case 7:
                    _d.apply(_c, [_e.sent()]);
                    _e.label = 8;
                case 8:
                    index++;
                    return [3 /*break*/, 6];
                case 9:
                    console.log('   2.Получение клиентов прошло успешно');
                    index = 0;
                    _e.label = 10;
                case 10:
                    if (!(index < count)) return [3 /*break*/, 13];
                    return [4 /*yield*/, client_1.deleteClient(clients[index])];
                case 11:
                    _e.sent();
                    _e.label = 12;
                case 12:
                    index++;
                    return [3 /*break*/, 10];
                case 13:
                    console.log('   3.Удаление клиентов прошло успешно');
                    return [3 /*break*/, 15];
                case 14:
                    error_4 = _e.sent();
                    console.error('Ошибка при тестировании функционала клиента\n' + error_4);
                    return [3 /*break*/, 15];
                case 15: return [2 /*return*/];
            }
        });
    });
}
function testWordlistFunctions(count) {
    return __awaiter(this, void 0, void 0, function () {
        var clients, index, _a, _b, lists, index, _c, _d, index, index, index, index, index, index, error_5, index;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    clients = new Array();
                    index = 0;
                    _e.label = 1;
                case 1:
                    if (!(index < count)) return [3 /*break*/, 4];
                    _b = (_a = clients).push;
                    return [4 /*yield*/, client_1.addClient("\u0428\u041B\u0401\u041F\u0410-Wordlist " + count + "#" + index, 'Мятные Пряники')];
                case 2:
                    _b.apply(_a, [_e.sent()]);
                    _e.label = 3;
                case 3:
                    index++;
                    return [3 /*break*/, 1];
                case 4:
                    _e.trys.push([4, 35, , 36]);
                    lists = new Array();
                    index = 0;
                    _e.label = 5;
                case 5:
                    if (!(index < count)) return [3 /*break*/, 8];
                    _d = (_c = lists).push;
                    return [4 /*yield*/, wordlist_1.createWordlist(clients[index], "" + Math.random() * 100000)];
                case 6:
                    _d.apply(_c, [_e.sent()]);
                    _e.label = 7;
                case 7:
                    index++;
                    return [3 /*break*/, 5];
                case 8:
                    console.log('   1.Создание вордлиста прошло успешно');
                    index = 0;
                    _e.label = 9;
                case 9:
                    if (!(index < count)) return [3 /*break*/, 13];
                    return [4 /*yield*/, wordlist_1.addWordToWordlist(lists[index], ['БАЗА', 'Приказ Израиля', 'Fucking Slave', 'FLEXxX'])];
                case 10:
                    _e.sent();
                    return [4 /*yield*/, wordlist_1.addWordToWordlist(lists[index], 'Я кринжовый молоток, Мне очень грустно. Помогите пожалуйста')];
                case 11:
                    _e.sent();
                    _e.label = 12;
                case 12:
                    index++;
                    return [3 /*break*/, 9];
                case 13:
                    console.log('   2.Добавление слова в вордлист прошло успешно');
                    index = 0;
                    _e.label = 14;
                case 14:
                    if (!(index < count)) return [3 /*break*/, 17];
                    return [4 /*yield*/, wordlist_1.renameWordlist(lists[index], 'КРИНЖ')];
                case 15:
                    _e.sent();
                    _e.label = 16;
                case 16:
                    index++;
                    return [3 /*break*/, 14];
                case 17:
                    console.log('   3.Лист Переименован успешно');
                    index = 0;
                    _e.label = 18;
                case 18:
                    if (!(index < count)) return [3 /*break*/, 22];
                    return [4 /*yield*/, wordlist_1.removeWordFromWordlist(lists[index], ['БАЗА', 'Приказ Израиля', 'Fucking Slave', 'FLEXxX'])];
                case 19:
                    _e.sent();
                    return [4 /*yield*/, wordlist_1.removeWordFromWordlist(lists[index], 'А этого слова нет!')];
                case 20:
                    _e.sent();
                    _e.label = 21;
                case 21:
                    index++;
                    return [3 /*break*/, 18];
                case 22:
                    console.log('   4.Удаление слова из вордлиста прошло успешно');
                    index = 0;
                    _e.label = 23;
                case 23:
                    if (!(index < count)) return [3 /*break*/, 26];
                    return [4 /*yield*/, wordlist_1.transferWordlist(lists[index], clients[count - index - 1]._id)];
                case 24:
                    _e.sent();
                    _e.label = 25;
                case 25:
                    index++;
                    return [3 /*break*/, 23];
                case 26:
                    console.log('   5.Лист передан успешно');
                    index = 0;
                    _e.label = 27;
                case 27:
                    if (!(index < count)) return [3 /*break*/, 30];
                    return [4 /*yield*/, wordlist_1.deleteWordlist(lists[index])];
                case 28:
                    _e.sent();
                    _e.label = 29;
                case 29:
                    index++;
                    return [3 /*break*/, 27];
                case 30:
                    console.log('   6.Удаление листа прошло успешно');
                    index = 0;
                    _e.label = 31;
                case 31:
                    if (!(index < count)) return [3 /*break*/, 34];
                    return [4 /*yield*/, wordlist_1.getWordlist(generateWordlistID(24))];
                case 32:
                    _e.sent();
                    _e.label = 33;
                case 33:
                    index++;
                    return [3 /*break*/, 31];
                case 34:
                    console.log('   7.Получение листа прошло успешно');
                    return [3 /*break*/, 36];
                case 35:
                    error_5 = _e.sent();
                    console.error('Ошибка при тестировании функционала вордлиста\n' + error_5);
                    return [3 /*break*/, 36];
                case 36:
                    index = 0;
                    _e.label = 37;
                case 37:
                    if (!(index < count)) return [3 /*break*/, 40];
                    return [4 /*yield*/, client_1.deleteClient(clients[index])];
                case 38:
                    _e.sent();
                    _e.label = 39;
                case 39:
                    index++;
                    return [3 /*break*/, 37];
                case 40: return [2 /*return*/];
            }
        });
    });
}
function testStudentFunctions(count) {
    return __awaiter(this, void 0, void 0, function () {
        var client, tokens, index, _a, _b, students, index, _c, _d, index, index, error_6;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, client_1.addClient("Master-\u0428\u041B\u0401\u041F\u0410", 'BIG SHLEPA')];
                case 1:
                    client = _e.sent();
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 20, , 21]);
                    tokens = new Array();
                    index = 0;
                    _e.label = 3;
                case 3:
                    if (!(index < count)) return [3 /*break*/, 6];
                    _b = (_a = tokens).push;
                    return [4 /*yield*/, student_1.addStudent(client)];
                case 4:
                    _b.apply(_a, [(_e.sent()).token]);
                    _e.label = 5;
                case 5:
                    index++;
                    return [3 /*break*/, 3];
                case 6:
                    console.log('   1.Создание студентов прошло успешно');
                    students = new Array();
                    index = 0;
                    _e.label = 7;
                case 7:
                    if (!(index < count)) return [3 /*break*/, 10];
                    _d = (_c = students).push;
                    return [4 /*yield*/, student_1.getStudentByToken(tokens[index])];
                case 8:
                    _d.apply(_c, [_e.sent()]);
                    _e.label = 9;
                case 9:
                    index++;
                    return [3 /*break*/, 7];
                case 10:
                    console.log('   2.Получение студентов прошло успешно');
                    index = 0;
                    _e.label = 11;
                case 11:
                    if (!(index < count)) return [3 /*break*/, 14];
                    return [4 /*yield*/, student_1.renameStudent(students[index], "Slave-\u0428\u041B\u0401\u041F\u0410 " + count + "#" + index)];
                case 12:
                    _e.sent();
                    _e.label = 13;
                case 13:
                    index++;
                    return [3 /*break*/, 11];
                case 14:
                    console.log('   3.Периименование студентов прошло успешно');
                    index = 0;
                    _e.label = 15;
                case 15:
                    if (!(index < count)) return [3 /*break*/, 18];
                    return [4 /*yield*/, student_1.deleteStudent(students[index])];
                case 16:
                    _e.sent();
                    _e.label = 17;
                case 17:
                    index++;
                    return [3 /*break*/, 15];
                case 18:
                    console.log('   4.Удаление студентов прошло успешно');
                    return [4 /*yield*/, client_1.deleteClient(client)];
                case 19:
                    _e.sent();
                    return [3 /*break*/, 21];
                case 20:
                    error_6 = _e.sent();
                    console.error('Ошибка при тестировании функционала студентов\n' + error_6);
                    return [3 /*break*/, 21];
                case 21: return [2 /*return*/];
            }
        });
    });
}
