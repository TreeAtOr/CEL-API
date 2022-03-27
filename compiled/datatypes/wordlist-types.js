"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordlistSchema = void 0;
var mongoose_1 = require("mongoose");
exports.WordlistSchema = new mongoose_1.Schema({
    title: 'String',
    owner: 'ObjectId',
    categories: ['String'],
    words: ['String']
});
var WordlistModel = mongoose_1.model('Wordlists', exports.WordlistSchema);
exports.default = WordlistModel;
