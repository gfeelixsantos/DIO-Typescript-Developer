import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
    doc_id:number

    constructor(name:string, accountNumber:number, balance:number, doc_id:number){
        super(name, accountNumber, balance)
        this.doc_id = doc_id
    }
}