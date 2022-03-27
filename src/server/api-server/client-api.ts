import express from 'express';
import { addClient } from '../../logic/client';

const clientAPI:express.Express = express()

/** Add Сдшуте
  @api {post} /api/addClient
  @apiName TransferWordlist
  @apiGroup Client

  @apiParam {String} token Master Token.
  @apiParam {String} name Client name.
  @apiParam {String} password Client password.

  @apiSucsess {string} token
*/
clientAPI.post('/addClient',async (req:any,res)=>{
    if(req.client.name === "Admin"){
        res.send(JSON.stringify((await addClient(req.body.name,req.body.password)).token))
    } else {
        res.send(JSON.stringify("You need to be Admin to add new client"))
    }
})

export default clientAPI;