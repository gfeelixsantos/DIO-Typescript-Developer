import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    constructor(name:string, accountNumber:number, balance:number){
        super(name,accountNumber,balance)
    }

    getLoan = (valor:number):void => {
        if (this.validateStatus()){
            this.balance += valor
        } else {
            console.log('Conta inativa!');
        }
    }
    deposit = ():void => console.log('A empresa depositou')
}