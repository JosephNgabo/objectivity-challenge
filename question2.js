const accounts = [];

function createyourAccount(name, initialDeposit) {
  if (initialDeposit < 0) {
    console.log("Error: Your initial deposit can't be the negative");
    return;
  }
  const account = { name, balance: initialDeposit };
  accounts.push(account);
  console.log(`Account created for ${name} with the initial deposit of ${initialDeposit}`);
}

function deposit(accountIndex, amount) {
  if (amount < 0) {
    console.log("Error: Can't deposit a negative amount");
    return;
  }
  const account = accounts[accountIndex];
  account.balance += amount;
  console.log(`Deposited ${amount} into ${account.name}'s account`);
  console.log(`${account.name}'s new balance is ${account.balance}`);
}

function withdraw(accountIndex, amount) {
  const account = accounts[accountIndex];
  if (amount < 0) {
    console.log("Error: Cannot withdraw a negative amount");
    return;
  } else if (amount > account.balance) {
    console.log("Error: Insufficient funds");
    return;
  }
  account.balance -= amount;
  console.log(`Withdrew ${amount} from ${account.name}'s account`);
  console.log(`${account.name}'s new balance is ${account.balance}`);
}

function viewBalance(accountIndex) {
  const account = accounts[accountIndex];
  console.log(`${account.name}'s balance is ${account.balance}`);
}

// Example usage
createyourAccount("Ntwali", 100);
deposit(0, 50);
withdraw(0, 25);
viewBalance(0);
