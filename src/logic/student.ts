import StudentModel, { Student } from "../datatypes/student-types";
import ClientModel, { Client } from "../datatypes/client-types";
import { save } from "../database/mongo";
import { generateToken } from "../database/generatetoken";
import { InvalidID, InvalidToken } from "../errors/client-errors";
import { ObjectId } from "mongodb";

export  async function addStudent(Client:Client,name:string = 'Unnamed') : Promise<Student> {
    let newstd: Student = await StudentModel.create({fullname : name})
    newstd.token = generateToken(newstd._id,30);
    Client.students?.push(newstd._id);
    await save(Client,newstd);
    return newstd;
}

export async function renameStudent(Student:Student,newName: string) : Promise<Student> {
    Student.fullname = newName;
    await save(Student);
    return Student;
}

export async function deleteStudent(Student:Student)  : Promise<Student> {
    return await Student.delete();
}

export async function getStudentByToken(token:string) : Promise<Student> {
    let res:Student | null = await StudentModel.findOne({token:token})
    if (!res) {throw new InvalidToken(token)}
    return res
}

export async function getStudent(id:ObjectId | string) { //DANGER: Mongodb ObjectId insted of Mongoose
    const wl:Student | null = await StudentModel.findById(id);
    if (!wl) {
      throw new InvalidID(new ObjectId(id));
    } else {
      return wl
    }
}