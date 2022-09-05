"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this.balance += amount;
    }
}
let account = new Account(1, 'Evan', 0);
account.deposit(313);
console.log('Acoount Balance : ', account.balance);
console.log('Acoount : ', account);
console.log(typeof account);
console.log(account instanceof Account);
//# sourceMappingURL=index.js.map