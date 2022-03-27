import express from 'express';
import mongoose = require('mongoose');
import passport from './passport-config';
import session from 'express-session'
import flash = require('express-flash');
import bodyParser from 'body-parser'


let server = express();


server.use(session({
    secret:'IGOR PIROG',
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 10 * 60 * 1000,
        httpOnly: false,
},}))
server.use(passport.initialize());
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
//server.use(flash())
server.use(passport.session())

server.get('/login',(req,res) => res.send("ERROR"))
server.post('/login',passport.authenticate('local',{ 
    successRedirect: '/secc',
    failureRedirect: '/fail' }))

server.get('/logout',function(req, res){
    req.logout();
    res.redirect('/login');
  })

server.get('/fail',(req,res) => res.redirect('/login'))
server.get('/secc',(req,res) => res.send(`<a href="/logout">${req.session.id}</a>`))

export default server;