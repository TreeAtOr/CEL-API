import { Wordlist } from "../datatypes/wordlist-types"

let fetch:any = require('node-fetch')

const CONNECTION = 'localhost:23556'

function fetchWordlistCreation(token:string,name:string) : Promise<Response> {
    return fetch(`http://${CONNECTION}/api/createWordlist`,{
        method: 'post',
        body: {
            token:token,
            name:name
        }
    })
}
function fetchWordlistRenaming(token:string,wordlist:string,name:string) : Promise<Response> {
    return fetch(`http://${CONNECTION}/api/renameWordlist`,{
        method: 'post',
        body: {
            token:token,
            wordlist:wordlist,
            name:name
        }
    })
}
function fetchWordlistWordAdd(token:string,wordlist:string,words:Array<string> | string) : Promise<Response> {
    return fetch(`http://${CONNECTION}/api/addWordToWordlist`,{
        method: 'post',
        body: {
            token:token,
            wordlist:wordlist,
            words:words
        }
    })
}

function fetchWordlistWordRemove(token:string,wordlist:string,words:Array<string> | string) : Promise<Response> {
    return fetch(`http://${CONNECTION}/api/removeWordFromWordlist`,{
        method: 'post',
        body: {
            token:token,
            wordlist:wordlist,
            words:words
        }
    })
}

const TESTTOKEN = '60546838bca7bd2dacbfafd9bJtOCHrjiNqPKQ4W2OyO'

export async function testWordlist() {
    let r1 : any,wl : any
    try {
        r1 = await fetchWordlistCreation(TESTTOKEN,'TestList');
        wl = await r1.json()
        console.log(wl);
    } catch (error) {
        console.error(error+`\n`+r1.text());
    }

    try {
        r1 = await fetchWordlistRenaming(TESTTOKEN,wl._id,'TestWordlistRenamed');
        console.log(wl);
    } catch (error) {
        console.error(error+`\n`+r1.text());
    }

    try {
        r1 = await fetchWordlistWordAdd(TESTTOKEN,wl._id,['СЛОВО',"ОЛОВО"]);
        console.log(wl);
    } catch (error) {
        console.error(error+`\n`+r1.text());
    }

    try {
        r1 = await fetchWordlistWordAdd(TESTTOKEN,wl._id,"ПЛОВО");
        console.log(wl);
    } catch (error) {
        console.error(error+`\n`+r1.text());
    }

    try {
        r1 = await fetchWordlistWordRemove(TESTTOKEN,wl._id,"ОЛОВО");
        console.log(wl);
    } catch (error) {
        console.error(error+`\n`+r1.text());
    }

    try {
        r1 = await fetchWordlistWordRemove(TESTTOKEN,wl._id,["ОЛОВО",'СЛОВО']);
        console.log(wl);
    } catch (error) {
        console.error(error+`\n`+r1.text());
    }
}