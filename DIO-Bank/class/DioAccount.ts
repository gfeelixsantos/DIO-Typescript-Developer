export abstract class DioAccount {
    private name:string
    private status:boolean = true
    readonly accountNumber:number
    balance:number

    constructor(name:string, accountNumber:number, balance:number) {
        this.name = name
        this.accountNumber = accountNumber
        this.balance = balance
    }

    validateStatus = () => {
        if (this.status){
            return this.status
        }
        throw new Error('Conta inválida')
    }

    getName = ():string => {
        return this.name
    }

    deposit = (valor:number) => {
        if (this.validateStatus()){
            this.balance += valor;
        }
    }
    withdraw = (valor:number):void => {
        if (this.validateStatus() && this.balance >= valor){
            this.balance -= valor
        }
        else {
            console.log('Valor acima do saldo!')
        }; 
    }

    getBalance = ():void => console.log('Seu balanco é:', this.balance); 
}


