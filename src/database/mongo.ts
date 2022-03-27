import { Document } from "mongoose";

export async function save(...docs:Array<Document>) {
    return await Promise.all(docs.map((doc:Document) : Promise<Document> => {
        if (typeof doc.__v == 'number') {
            doc.__v++;
        } else {
            doc.__v = 1;
        }
        return doc.save()
    })) 
}