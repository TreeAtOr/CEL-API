import { ObjectId } from "mongoose";
import { save } from "../database/mongo";
import { Student, WordmarkRow } from "../datatypes/student-types";
import { Wordlist } from "../datatypes/wordlist-types";

export async function addWordlistToStudent(student:Student,wordlist:Wordlist) : Promise<Student>{
    if(!student) throw new Error("Bad Token")
    if(!wordlist) throw new Error("Wordlist is not presented")
    let wmrcs = student.wordmarks.get(wordlist._id)
    if(wmrcs){
        for (let index = 0; index < wordlist.words.length; index++) {
            const element = wordlist.words[index];
            const idx = wmrcs.findIndex((value)=> value.word==element)
            if (!~idx) {
                wmrcs.unshift({
                    word:element,
                    lastuse: new Date(),
                    lastmistake: new Date(),
                    use_count:0
                })
            }
        }
    }
    else {
        student.wordmarks.set(wordlist._id,wordlist.words.map((v)=>{
            return {
                word:v,
                lastuse: new Date(),
                lastmistake: new Date(),
                use_count:0
            }
        }))
    }
    save(student)
    return student;
}

export function LeigthnerStrategy(row:WordmarkRow) : number {
    return (row.lastmistake.getTime() - row.lastuse.getTime())
}

export async function setCurrentWordlist(student:Student,id:Array<ObjectId> | null) : Promise<Student> {
    if (!id) {
        student.current = [];
    } else {
        student.current = id;
    }
    save(student)
    return student;
}

export function getWordmarks(student:Student) : Array<WordmarkRow> {
    let ret = new Array<WordmarkRow>();
    for (let index = 0; index < student.current.length; index++) {
        ret.concat(student.wordmarks.get(student.current[index])!)
    }
    ret.sort((a,b)=>{
        return LeigthnerStrategy(a) - LeigthnerStrategy(b); //SLOW
    })
    return ret;
}