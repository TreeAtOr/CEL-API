import express from 'express';
import { checkStudentAccess } from '../../logic/client';
import { addStudent, deleteStudent, getStudent, renameStudent } from '../../logic/student';

let studentAPI: express.Express = express();

/** addStudent
  @api {post} /api/addStudent
  @apiName {Add Student}
  @apiGroup Student

  @apiParam {String} token Client Token.
  @apiParam {String} name Student unique name.

  @apiSuccess {Student} Student Obj.
 */
studentAPI.post('/addStudent',async (req:any,res:any) => {
    res.send(JSON.stringify(await addStudent(req.client,req.body.name+'')))
})

/** renameStudent
  @api {post} /api/renameStudent
  @apiName Rename Student
  @apiGroup Student

  @apiParam {String} token Client Token.
  @apiParam {String} id Student ID.
  @apiParam {String} name Student new name.

  @apiSuccess {Student} Student Obj.
 */
studentAPI.post('/renameStudent',async (req:any,res:any) => {
    checkStudentAccess(req.client,req.body.id);
    res.send(JSON.stringify(await renameStudent(await getStudent(req.body.id),req.body.name)))
    
})

/** Delete Student
  @api {post} /api/deleteStudent
  @apiName Delete Student
  @apiGroup Student

  @apiParam {String} token Client Token.
  @apiParam {String} id Student ID.

  @apiSuccess {Student} Deleted Student Object.
 */
studentAPI.post('/deleteStudent',async (req:any,res:any) => {
    checkStudentAccess(req.client,req.body.id);
    res.send(JSON.stringify(await deleteStudent(await getStudent(req.body.id))))
})



export default studentAPI;

