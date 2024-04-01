// BankAccount constructor function
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
}

// Deposit method: Deposits the specified amount into the account
BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount} into account ${this.accountNumber}.`);
    } else {
        console.log("Invalid deposit amount. Please enter a positive value.");
    }
};

// Withdraw method: Withdraws the specified amount from the account if balance is sufficient
BankAccount.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount} from account ${this.accountNumber}.`);
    } else {
        console.log("Insufficient balance or invalid withdrawal amount.");
    }
};

// Check balance method: Prints the account's balance
BankAccount.prototype.checkBalance = function() {
    console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
};

// isActive method: Checks if the account is active (balance > 0)
BankAccount.prototype.isActive = function() {
    return this.balance > 0;
};

// Create multiple BankAccount objects
const account1 = new BankAccount("A123", "Alice", "Savings", 1000);
const account2 = new BankAccount("B456", "Bob", "Checking", 2000);

// Perform operations on the accounts
account1.deposit(500);
account1.withdraw(200);
account1.checkBalance();

account2.deposit(1000);
account2.withdraw(300);
account2.checkBalance();

// Test isActive method
console.log(`Account 1 active? ${account1.isActive()}`);
console.log(`Account 2 active? ${account2.isActive()}`);

// Implement getTotalBalance function
function getTotalBalance(accounts) {
    return accounts.reduce((total, acc) => total + acc.balance, 0);
}

// Test getTotalBalance function
const allAccounts = [account1, account2];
console.log(`Total balance of all active accounts: $${getTotalBalance(allAccounts)}`);
