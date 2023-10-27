import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount"
import { UniversityAccount } from "./class/UniversityAccount";


const usuario:PeopleAccount = new PeopleAccount('Gabriel Felix', 1, 0, 9999)
// Teste depósito, esperamos receber o valor acrescido na conta
usuario.deposit(100)
console.log(usuario.balance)
// Teste de saque, esperamos que não seja possível se saque > saldo
usuario.withdraw(150)

const company:CompanyAccount = new CompanyAccount('Felix Devx', 80, 0)
// Teste de emprestimo, retornar o valor na conta desde de que ativa
company.getLoan(1000)
console.log(company.balance, company.validateStatus());

const university:UniversityAccount = new UniversityAccount('Feliquito', 2020, 0)
// Teste conta extra, retornar o deposito acrescido de +10
university.deposit(200)
console.log(university.balance);





