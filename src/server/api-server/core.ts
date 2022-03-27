import express from 'express';
import mongoose = require('mongoose');
import { getClientByToken } from '../../logic/client';
import clientAPI from './client-api';
import learningAPI from './learning-api';
import studentAPI from './student-api';
import wordlistAPI from './wordlist-api';

let server = express();
server.use('/api',async (req:any,res:any,next:Function) => {
    try {
        req.client = await getClientByToken(req.body.token);
        next();
    } catch (error) {res.send(error.message)}
})
server.use('/api',wordlistAPI);
server.use('/api',clientAPI);
server.use('/api',studentAPI);
server.use('/api/learn',learningAPI)
export default server;
