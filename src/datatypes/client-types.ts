import { ObjectId,Document,Schema, model } from "mongoose";

export interface Client extends Document{
    name        : string,
    password    : string,
    token       : string,
    students?   : Array <ObjectId>,
    wordlists   : Array <ObjectId> 
}

export const ClientSchema = new Schema({
    name        : {type: 'String',required:true},
    password   : {type: 'String',required:true},
    token       : {type: 'String',required:true},
    students    : {type:['ObjectId'],required:false},
    wordlists   : {type:['ObjectId'],required:false}
})

const ClientModel = model<Client>('Clients',ClientSchema)
export default ClientModel;