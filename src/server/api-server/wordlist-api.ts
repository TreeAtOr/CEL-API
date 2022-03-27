import express from 'express';
import { checkWordlistAccess, getClientByToken } from '../../logic/client';
import { addWordToWordlist, createWordlist, deleteWordlist, getWordlist, removeWordFromWordlist, renameWordlist, transferWordlist } from '../../logic/wordlist';

let wordlistAPI: express.Express = express();


/** CreateWordlist
  @api {post} /api/createWordlist
  @apiName CreateWordlist
  @apiGroup Wordlist

  @apiParam {String} token Client Token.
  @apiParam {String} name Wordlist name.
  @apiSucsess {Wordlist} Wordlist object

  */
wordlistAPI.post('/createWordlist',async (req:any,res) => {
    res.send(JSON.stringify(await createWordlist(req.client,req.body.name+'')))
})


/** RenameWordlist
  @api {post} /api/renameWordlist
  @apiName RenameWordlist
  @apiGroup Wordlist

  @apiParam {String} token Client Token.
  @apiParam {String} wordlist Wordlist ID.
  @apiParam {String} name Wordlist new name.

  @apiSucsess {Wordlist} Wordlist object
  */
wordlistAPI.post('/renameWordlist',async (req:any,res) => {
    try {
        checkWordlistAccess(req.client,req.body.wordlist)
        res.send(JSON.stringify(await renameWordlist(await getWordlist(req.body.wordlist),req.body.name+'')))
    } catch (error) {
        res.send(error.message)
    }
})

/** TransferWordlist
  @api {post} /api/transferWordlist
  @apiName TransferWordlist
  @apiGroup Wordlist

  @apiParam {String} token Client Token.
  @apiParam {String} id new owner ID.
  @apiParam {String} wordlist Wordlist ID.

  @apiSucsess {Wordlist} Wordlist object
*/
wordlistAPI.post('/transferWordlist',async (req:any,res) => {
    checkWordlistAccess(req.client,req.body.wordlist)
    res.send(JSON.stringify(await transferWordlist(await getWordlist(req.body.wordlist),req.body.id)))
})


/**Add word to list
  @api {post} /api/addWordsToWordlist
  @apiName TransferWordlist
  @apiGroup Wordlist

  @apiParam {String} token Client Token.
  @apiParam {String} words stringfied word array
  @apiParam {String} wordlist Wordlist ID.

  @apiSucsess {Wordlist} Wordlist object
*/
wordlistAPI.post('/addWordsToWordlist', async (req:any,res) => {
    try {
        checkWordlistAccess(req.client,req.body.wordlist)
        res.send(JSON.stringify(await addWordToWordlist(await getWordlist(req.body.wordlist),req.body.words)))
    } catch (error) {
        res.send(error.message)
    }
})


/**Add word to list
  @api {post} /api/removeWordFromWordlist
  @apiName TransferWordlist
  @apiGroup Wordlist

  @apiParam {String} token Client Token.
  @apiParam {String} words stringfied word array
  @apiParam {String} wordlist Wordlist ID.

  @apiSucsess {Wordlist} Wordlist object
*/
wordlistAPI.post('/removeWordFromWordlist', async (req:any,res) => {
    try {
        checkWordlistAccess(req.client,req.body.wordlist)
        res.send(JSON.stringify(await removeWordFromWordlist(await getWordlist(req.body.wordlist),req.body.words)))
    } catch (error) {
        res.send(error.message)
    }
})


/** DelateWordlist
  @api {post} /api/deleteWordlist
  @apiName DelateWordlist
  @apiGroup Wordlist

  @apiParam {String} token Client Token.
  @apiParam {String} wordlist Wordlist ID.

  @apiSucsess {Wordlist} Wordlist object
  */
wordlistAPI.post('/deleteWordlist', async (req:any,res) => {
    try {
        checkWordlistAccess(req.client,req.body.wordlist)
        res.send(JSON.stringify(await deleteWordlist(await getWordlist(req.body.wordlist))))
    } catch (error) {
        res.send(error.message)
    }
})

export default wordlistAPI;