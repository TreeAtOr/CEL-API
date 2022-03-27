import { ObjectId } from "mongodb";

export class ClientError extends Error{
    login: string;
    constructor(message:string,login:string) {
        super(message);
        this.login = login;
    }
}

export class ClientRegestredAlready extends ClientError{
    constructor(login:string){
        super('Client regestred allready',login)
    }
}

export class ClientNoPermissions extends ClientError{
    constructor(login:string){
        super('Client have no permissions for this action',login)
    }
}


export class InvalidToken extends Error{
    constructor(token:string){
        super(`Can\`t get client using ${token}. Invalid token`)
    }
}

export class InvalidID extends Error{
    constructor(id:ObjectId){
        super(`Can\`t get client using ${id}. Invalid token`)
    }
}