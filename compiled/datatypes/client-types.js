"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ClientSchema = new mongoose_1.Schema({
    name: { type: 'String', required: true },
    password: { type: 'String', required: true },
    token: { type: 'String', required: true },
    students: { type: ['ObjectId'], required: false },
    wordlists: { type: ['ObjectId'], required: false }
});
var ClientModel = mongoose_1.model('Clients', exports.ClientSchema);
exports.default = ClientModel;
