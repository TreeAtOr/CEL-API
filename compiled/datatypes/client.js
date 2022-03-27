"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ClientSchema = new mongoose_1.Schema({
    name: { type: 'String', required: true },
    passsword: { type: 'String', required: true },
    token: { type: 'String', required: true },
    students: { type: ['ObjectId'], required: true },
    wordlists: { type: ['ObjectId'], required: true }
});
var ClientModel = mongoose_1.model('Clients', exports.ClientSchema);
exports.default = ClientModel;
