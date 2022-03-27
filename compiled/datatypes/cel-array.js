"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndDelete = void 0;
function findAndDelete(arr, thing) {
    if (typeof thing === 'function') {
        var index = arr.find(thing);
        if (index) {
            arr.splice(index, 1);
        }
    }
    else {
        var index = arr.indexOf(thing);
        if (~index) {
            arr.splice(index, 1);
        }
    }
    return arr;
}
exports.findAndDelete = findAndDelete;
