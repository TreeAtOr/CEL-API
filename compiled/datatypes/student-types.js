"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.StudentSchema = new mongoose_1.Schema({
    fullname: 'String',
    token: 'String',
    current: ['ObjectId'],
    type: { type: String },
    wordmarks: {
        type: 'Map',
        of: new mongoose_1.Schema({
            word: 'String',
            use_count: 'Number',
            lastmistake: 'Date',
            lastuse: 'Date'
        })
    }
});
var StudentModel = mongoose_1.model('students', exports.StudentSchema);
exports.default = StudentModel;
