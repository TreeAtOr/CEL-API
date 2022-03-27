import { Mongoose, ObjectId, SchemaTypes } from "mongoose";
import { model, Schema,Document } from "mongoose";

export interface WordmarkRow {
  word        : string,
  use_count   : number,
  lastmistake : Date,
  lastuse     : Date
}
export interface Student extends Document {
  fullname  : string,
  token     : string,
  current   : Array<ObjectId>,
  type      : string,
  wordmarks : Map<ObjectId,Array<WordmarkRow>>
}

export const StudentSchema = new Schema({
  fullname  : 'String',
  token     : 'String',
  current : ['ObjectId'],
  type      : { type: String },
  wordmarks : {
    type: 'Map',
    of: new Schema({
      word        : 'String',
      use_count   : 'Number',
      lastmistake : 'Date',
      lastuse     : 'Date'
      })
}
})

const StudentModel = model<Student>('students',StudentSchema);
export default StudentModel;