"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var passport_config_1 = __importDefault(require("./passport-config"));
var express_session_1 = __importDefault(require("express-session"));
var body_parser_1 = __importDefault(require("body-parser"));
var server = express_1.default();
server.use(express_session_1.default({
    secret: 'IGOR PIROG',
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 10 * 60 * 1000,
        httpOnly: false,
    },
}));
server.use(passport_config_1.default.initialize());
server.use(body_parser_1.default.urlencoded({ extended: false }));
server.use(body_parser_1.default.json());
//server.use(flash())
server.use(passport_config_1.default.session());
server.get('/login', function (req, res) { return res.send("ERROR"); });
server.post('/login', passport_config_1.default.authenticate('local', {
    successRedirect: '/secc',
    failureRedirect: '/fail'
}));
server.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/login');
});
server.get('/fail', function (req, res) { return res.redirect('/login'); });
server.get('/secc', function (req, res) { return res.send("<a href=\"/logout\">" + req.session.id + "</a>"); });
exports.default = server;
