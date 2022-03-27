import { ObjectId } from "mongoose";
import { generateToken } from "../database/generatetoken";
import ClientModel, { Client } from "../datatypes/client-types";
import { Student } from "../datatypes/student-types";
import { ClientNoPermissions, ClientRegestredAlready, InvalidToken } from "../errors/client-errors";

export async function generateClientToken(client:Client) : Promise<Client> {
    client.token = generateToken(client._id,30);
    return await client.save();
}

export async function addClient(name :string,password : string) : Promise<Client> {
    let cli:Client | null = await ClientModel.findOne({name: name})
    if (cli) {throw new ClientRegestredAlready(name)}
    cli = await ClientModel.create({name:name,password:password,token:'No token'})
          await generateClientToken(cli);
    return cli;
}

export async function getClientByToken(token:string) : Promise<Client> {
    let res:Client | null = await ClientModel.findOne({token:token})
    if (!res) {throw new InvalidToken(token)}
    return res
}

export async function deleteClient(Client:Client) : Promise<Client>  {
    await Client.delete();
    return Client;
}

export function checkWordlistAccess(Client:Client,WordlistId:string) : boolean {
    if (!Client.wordlists.find((wl => (wl+'') == WordlistId))) {
        console.log(Client);
        console.log(WordlistId);
        throw new ClientNoPermissions(Client.name);
    } 
    return true;
}

export function checkStudentAccess(Client:Client, StudentId:ObjectId) : boolean {
    if (!Client.students || !~Client.students.indexOf(StudentId)) {
        
        throw new ClientNoPermissions(Client.name);
    } 
    return true;
}
