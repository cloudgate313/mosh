class Account {
  constructor(
    private readonly id: number,
    public owner: string,
    private _balance: number) { }

  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error('Invalid amount');
    }
    this._balance += amount;
  }

  get balance() {
    return this._balance;
  }

  set balance(value: number) {
    if (value <= 0) {
      throw new Error('Invalid value');
    }
    this._balance = value;
  }

  // getBalance() {
  //   return this._balance;
  // }

  private calculateTax() {

  }
}

let account = new Account(1, 'Evan', 0);
account.deposit(313);
console.log('Acoount Balance : ', account.balance);
console.log('Acoount : ', account);
console.log('typeof account : ', typeof account);
console.log('account instanceof Account : ', account instanceof Account);

