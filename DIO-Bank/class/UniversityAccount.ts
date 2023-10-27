import { DioAccount } from "./DioAccount";

export class UniversityAccount extends DioAccount {
    constructor(name:string, accountNumber:number, balance:number){
        super(name, accountNumber, balance)
    }

    deposit = (valor: number) => {
        this.balance += valor + 10
    };
}