import { ObjectID, ObjectId } from "mongodb";
import { model, Schema,Document } from "mongoose";

export interface WordlistData {
    _id:any;
    title:string;
    owner:ObjectId;
    categories:Array<string>;
    words:Array<string>;
}

export interface Wordlist extends Document{
    title:string;
    owner:ObjectId;
    categories:Array<string>;
    words:Array<string>;
}

export const WordlistSchema = new Schema({
    title      : 'String',
    owner      : 'ObjectId',
    categories : ['String'],
    words      : ['String']
})

const WordlistModel = model<Wordlist>('Wordlists',WordlistSchema);
export default WordlistModel;