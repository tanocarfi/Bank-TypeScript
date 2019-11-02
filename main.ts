import { Account } from "./Account";
import { Bank } from "./Bank";

let bank1 = new Bank('Intesa San Paolo', 1);
let bank2 = new Bank('Unicredit', 2);


bank1.accounts.push(new Account (1, 'Claudio', 'Landolfo', 1500));
bank1.accounts.push(new Account (2, 'Daria', 'Gilletti', ));
bank1.accounts.push(new Account (3, 'Carlo', 'Leondardi', 2500));
bank1.accounts.push(new Account (4, 'Daniele', 'Manni', 900));

bank2.accounts.push(new Account (1, 'Matteo', 'Annaro', 1400));
bank2.accounts.push(new Account (2, 'Giusy', 'Giangravè', ));
bank2.accounts.push(new Account (3, 'Alberto', 'Longo', 2400));
bank2.accounts.push(new Account (4, 'Pierantonio', 'Petralia', 800));


bank1.setTransaction(bank1.accounts[0], 200, bank1.accounts[1]);
bank1.setTransaction(bank1.accounts[1], 50, bank1.accounts[2]);
bank1.setTransaction(bank1.accounts[2], 300, bank1.accounts[3]);

console.log(`${bank1.getTransaction()}`);

console.log(`The total credit of the Bank1 is €${bank1.getCreditTotal()} \n`);

console.log(`${bank2.transition(bank1.accounts[0], bank1, 100, bank2.accounts[2], bank2)}`);