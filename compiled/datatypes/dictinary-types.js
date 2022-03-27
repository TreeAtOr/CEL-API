"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DictinaryRow = /** @class */ (function () {
    function DictinaryRow(word, translation, transcription) {
        this.word = word;
        this.translation = translation;
        if (transcription) {
            this.transcription = transcription;
        }
    }
    return DictinaryRow;
}());
var Dictinary = /** @class */ (function () {
    function Dictinary(path) {
        throw new Error("Это не сделано. Словари появяться позже");
    }
    return Dictinary;
}());
