import { Account } from "./Account";

interface Transaction {
    contributor: Account;
    money: number;
    receiver: Account;
}

export class Bank {
    public accounts: Account[] = [];
    public transactions: Transaction [] = [];

    constructor (public name: string, public id: number) {}

    getTransaction (): string {
        let result: string = ``;
        for (let i = 0; i < this.transactions.length; i++) {
            result += `Transaction from ${this.transactions[i].contributor.name} to ${this.transactions[i].receiver.name} of €${this.transactions[i].money} \n`;
        }
        return result;
    } 

    setTransaction (contributor: Account, money: number, receiver: Account): boolean {
        if (contributor.sendMoney(money, receiver) == false) {
            return false;
        } else {
            this.transactions.push({contributor, money, receiver});
            return true;
        }
    }

    /*La banca avrà un metodo per visualizzare la somma totale dei soldi contenuti per ogni contocorrente(Account).*/
    getCreditTotal (): number {
        let sum = 0;
        for (let i = 0; i < this.accounts.length; i++) {
            sum += this.accounts[i].credit;
        }
        return sum;
    }

    /* Sarà ancora possibile fare operazioni di transazioni di Account anche su Banche diverse.
    /* Le operazioni tra Banche diverse costeranno un euro per l’Account che invia i soldi e andranno 
    /* alla banca che invia il denaro. Le operazioni nella stessa banca non avranno costi.*/
    transition (contributor: Account, bankSender: Bank, money: number, receiver: Account, bankReceiver: Bank): string {
        let commission = 0;
        if (!(bankReceiver.id === bankSender.id)) {
            commission = 1;
        }
        contributor.sendMoney((contributor.credit - (money + commission)), receiver);
        receiver.sendMoney((receiver.credit + money), receiver);
        bankSender.setTransaction(contributor, (bankReceiver.getCreditTotal() + commission), receiver);
        return `Transaction carried out from ${contributor.name} to ${receiver.name} of €${money} \n`;
    }
}