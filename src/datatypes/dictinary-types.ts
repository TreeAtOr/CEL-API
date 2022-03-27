import { ObjectId } from "mongodb";
import { readFileSync } from "fs";

class DictinaryRow {
    word:string;
    transcription?:string;
    translation: Array<string>;
    constructor(word:string,translation:Array<string>,transcription:string | null) {
        this.word = word;
        this.translation = translation;
        if (transcription) {
            this.transcription = transcription;
        }
    }
}

class Dictinary {
    name:string;
    desc:string;
    public:string;
    owner: ObjectId;
    words:Map<String,DictinaryRow>;
    constructor(path:string) {
        throw new Error("Это не сделано. Словари появяться позже");
    }
}


