import express from 'express';
import { checkStudentAccess } from '../../logic/client';
import { addWordlistToStudent, getWordmarks } from '../../logic/learning';
import { getStudent } from '../../logic/student';
import { getWordlist } from '../../logic/wordlist';

let learningAPI: express.Express = express();
learningAPI.use(async (req:any,res:any,next:Function) => {
    try {
        checkStudentAccess(req.client,req.body.student)
        req.student = await getStudent(req.body.student);
        next();
    } catch (error) {res.send(error.message)}
})

/** 
  @api {post} /api/learn/addWordlistToStudent
  @apiName addWordlistToStudent
  @apiGroup Learning

  @apiParam {String} token 
  @apiParam {String} student Student id.
  @apiParam {String} wordlist Wordlist to add.

  @apiSucsess {Student} Student Obj
*/
learningAPI.post('/addWordlistToStudent',async (req:any,res)=>{
    try {
        res.send(addWordlistToStudent(req.student,await getWordlist(req.body.wordlist)))
    } catch (error) {
        res.send(error)    
    }
})
/** 
  @api {post} /api/learn/getMarked
  @apiName setWordlist
  @apiGroup Learning

  @apiParam {String} token 
  @apiParam {String} student Student id.

  @apiSucsess {Array<WordmarkRow>} Student Obj
*/
learningAPI.post('/getMarked',(req:any,res)=>{
    try {
      res.send(getWordmarks(req.student))  
    } catch (error) {
        res.send(error)
    } 
})

learningAPI.post('/')

export default learningAPI;