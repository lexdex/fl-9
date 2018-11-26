function userCard (index) {
  let key = index;
  let balance = 100;
  let transactionLimit = 100;
  const TAX = 0.005;
  let historyLog = [];
  let date = new Date().toLocaleString('en-GB');

  function historyLogChange (operationType, amount, date) {
    historyLog.push({
      operationType: operationType,
      credits: amount,
      operationTime: date
    });
  }

  return {
    getCardOptions () {
      return { key, balance, transactionLimit, historyLog
      };
    },

    putCredits (amount) {
      balance += amount;
      historyLogChange('Received credits', amount, date);
    },

    takeCredits (amount) {
      if (amount <= balance && amount <= transactionLimit) {
        balance -= amount;
        historyLogChange('Withdrawal of credits', amount, date);
      } else {
        console.log(`Transfer error! Please check balance: ${balance} and transaction limit: ${transactionLimit}`);
      }
    },

    setTransactionLimit (amount) {
      transactionLimit = amount;
      historyLogChange('Transaction limit change', amount, date);
    },

    transferCredits (amount, cardNumb) {
      let realAmount = TAX * amount + amount;
      if (realAmount <= balance && realAmount <= transactionLimit) {
        this.putCredits(realAmount);
        this.takeCredits(amount);
        historyLogChange('Withdrawal of credits', amount, date);
      } else {
        console.log(`Transfer error! Please check balance: ${balance} and transaction limit: ${transactionLimit}`);
      }
    }
  };
}

class UserAccount {
  constructor (name) {
    this.name = name;
    this.cards = [];
    this.numbOfCards = 3;
  }

  addCard () {
    if (this.cards.length < this.numbOfCards) {
      this.cards.push(userCard(this.cards.length + 1));
    } else {
      console.log(`Error! It is a max number of cards!\n`);
    }
  }
  getCardByKey (key) {
    return this.cards[key - 1];
  }
}
