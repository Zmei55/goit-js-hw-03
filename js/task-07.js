const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const newItem = {
      id: this.transactions.length + 1,
      amount,
      type,
    };

    this.transactions = [...this.transactions, newItem];
  },

  deposit(amount) {
    this.balance += amount;

    this.createTransaction(amount, 'deposit');
  },

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.createTransaction(amount, 'withdraw');
    } else {
      alert(
        `Снятие ${amount} не возможно, недостаточно средств. Ваш текущий баланс: ${account.balance}`
      );
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  getTransactionTotal(type) {
    let sum = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }

    return sum;
  },
};

account.deposit(1000);
account.withdraw(400);
account.deposit(300);
account.withdraw(700);
account.deposit(3000);
account.withdraw(1100);

console.log(account.getTransactionDetails(3));

console.log('Сумма deposit: ', account.getTransactionTotal('deposit'));
console.log('Сумма withdraw: ', account.getTransactionTotal('withdraw'));

console.log('Баланс: ', account.getBalance());

console.table(account.transactions);
