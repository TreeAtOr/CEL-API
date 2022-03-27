"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidID = exports.InvalidToken = exports.ClientNoPermissions = exports.ClientRegestredAlready = exports.ClientError = void 0;
var ClientError = /** @class */ (function (_super) {
    __extends(ClientError, _super);
    function ClientError(message, login) {
        var _this = _super.call(this, message) || this;
        _this.login = login;
        return _this;
    }
    return ClientError;
}(Error));
exports.ClientError = ClientError;
var ClientRegestredAlready = /** @class */ (function (_super) {
    __extends(ClientRegestredAlready, _super);
    function ClientRegestredAlready(login) {
        return _super.call(this, 'Client regestred allready', login) || this;
    }
    return ClientRegestredAlready;
}(ClientError));
exports.ClientRegestredAlready = ClientRegestredAlready;
var ClientNoPermissions = /** @class */ (function (_super) {
    __extends(ClientNoPermissions, _super);
    function ClientNoPermissions(login) {
        return _super.call(this, 'Client have no permissions for this action', login) || this;
    }
    return ClientNoPermissions;
}(ClientError));
exports.ClientNoPermissions = ClientNoPermissions;
var InvalidToken = /** @class */ (function (_super) {
    __extends(InvalidToken, _super);
    function InvalidToken(token) {
        return _super.call(this, "Can`t get client using " + token + ". Invalid token") || this;
    }
    return InvalidToken;
}(Error));
exports.InvalidToken = InvalidToken;
var InvalidID = /** @class */ (function (_super) {
    __extends(InvalidID, _super);
    function InvalidID(id) {
        return _super.call(this, "Can`t get client using " + id + ". Invalid token") || this;
    }
    return InvalidID;
}(Error));
exports.InvalidID = InvalidID;
