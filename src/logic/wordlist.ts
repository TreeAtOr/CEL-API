import { ObjectId } from "mongodb";
import { save } from "../database/mongo";
import { findAndDelete } from "../datatypes/cel-array";
import ClientModel, { Client } from "../datatypes/client-types";
import WordlistModel, { Wordlist } from "../datatypes/wordlist-types";
import { ClientNoPermissions, InvalidID } from "../errors/client-errors";

export async function createWordlist(client:Client,name:string):Promise<Wordlist> {
    let wordlist:Wordlist = await WordlistModel.create({title:name, owner: client._id});  
    client.wordlists.push(wordlist._id);
    client.__v ++; 
    await client.save();
    
    return await wordlist.save();
}

export async function transferWordlist(Wordlist:Wordlist,newOwnerID: ObjectId):Promise<Wordlist>{
  let own:Client | null = await ClientModel.findById(Wordlist.owner)
    if (!own) throw new InvalidID(Wordlist.owner)
  let cli:Client | null = await ClientModel.findById(newOwnerID)
    if (!cli) throw new InvalidID(newOwnerID)
    own.wordlists.splice(own.wordlists.indexOf(Wordlist._id),1)
    cli.wordlists.push(Wordlist._id)
    Wordlist.owner = newOwnerID;
    await cli.replaceOne(cli);
    await own.replaceOne(own);
    await save(Wordlist);
    return Wordlist;
}

export async function renameWordlist(Wordlist:Wordlist,title:string):Promise<Wordlist> {
  Wordlist.title = title;
  await save(Wordlist);
  return Wordlist;
}

export async function addWordToWordlist(Wordlist:Wordlist,word:string | Array<string>) {
  if (typeof word === 'string') {
    Wordlist.words.push(word)
  } else {
    Wordlist.words.concat(word)
  }
  Wordlist.__v++;
  await save(Wordlist);
  return Wordlist;
}

export async function removeWordFromWordlist(Wordlist:Wordlist,word:string | Array<string>) {
  if (typeof word === 'string') {
    findAndDelete(Wordlist.words,word)
  } else {
    word.forEach(element => {
      findAndDelete(Wordlist.words,element)
    });
  }
  await save(Wordlist);
  return Wordlist;
}

export async function deleteWordlist(Wordlist:Wordlist) : Promise<Wordlist> {
  await Wordlist.delete()
  return Wordlist;
}

export async function getWordlist(id:ObjectId | string) : Promise<Wordlist> { //DANGER: Mongodb ObjectId insted of Mongoose
  const wl:Wordlist | null = await WordlistModel.findById(id);
  if (!wl) {
    throw new InvalidID(new ObjectId(id));
  } else {
    return wl
  }
}
