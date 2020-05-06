export class Account {
  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public credit = 2000
  ) {}
  // this is a comment for testing
  // hello

  sendMoney(howMoney: number, otherAccount: Account): boolean {
    if (howMoney > this.credit) {
      return false;
    } else {
      this.credit -= howMoney;
      otherAccount.credit += howMoney;
      return true;
    }
    // there is other testing comment
    // ciao
  }
}
