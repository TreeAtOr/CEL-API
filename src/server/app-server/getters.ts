
import express from 'express';
import { ObjectID } from 'mongodb';
import WordlistModel, { WordlistData } from '../../datatypes/wordlist-types';
import { removeWordFromWordlist } from '../../logic/wordlist';

let gettersAPI: express.Express = express();

gettersAPI.get('wordlist/:id',async(req,res)=> {
    let wlist = await WordlistModel.findById(new ObjectID(req.params.id))
    let tosend:WordlistData = wlist as WordlistData;
    res.send(JSON.stringify(tosend))
})