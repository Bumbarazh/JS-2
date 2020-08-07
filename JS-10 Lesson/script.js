// 1) Створити карту користувача(User Card):

function userCard (num) {

    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = num;

//Дана функція повертає об’єкт котрий містить інформацію про карту

    function getCardOption () { 
        return {
            balance : this.balance,
            transactionLimit : this.transactionLimit,
            historyLogs,
            key
        }
    }
    
//Ця функція отримує певну кількість грошей і заповнює баланс карти

    let day = new Date();

    function putCredits (credits) { 
        this.balance += credits;
        historyLogs.push(
            {
            operationType: 'Received credits',
            credits: credits,
            operationTime: `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}, ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`
            }
        );
        return;
    }

//Ця функція отримує певну кількість грошей і віднімає ці кошти з баланса карти

    function takeCredits (credits) {  
        if (credits <= this.balance && credits <= this.transactionLimit) {
            this.balance -= credits;
            historyLogs.push(
                {
                operationType: 'Withdraval of credits',
                credits: credits,
                operationTime: `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}, ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`
                }
            );
            return;
        }
        return console.error('You have not credits for this transaction');
        
    }

// Ця функція приймає як аргумент число і встановлює його як ліміт транзакцій на картці

    function setTransactionLimit (limitOfTransaction) {
        this.transactionLimit = limitOfTransaction;
        historyLogs.push(
            {
            operationType: 'Transaction limit change',
            credits: limitOfTransaction,
            operationTime: `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}, ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`
            }
        );
        return;
    }

// Ця функція отримує два аргументи - кількість кредитів, які потрібно передати, та карту одержувача

    function transferCredits (giveCredits, card) {
        if ((giveCredits * 1.005) <= this.balance && (giveCredits * 1.005) <= this.transactionLimit) {
            this.balance -= (giveCredits * 1.005).toFixed(1);
            card.balance += giveCredits;
            this.historyLogs.push(
                {
                operationType: 'Withdraval of credits',
                credits: (giveCredits * 1.005).toFixed(1),
                operationTime: `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}, ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`
                }
            );
            card.historyLogs.push(
                {
                operationType: 'Received credits',
                credits: giveCredits,
                operationTime: `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}, ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`
                }
            );
            return;
        }
        return console.error('You have not credits for this transaction');
    }

    return {
        balance,
        transactionLimit,
        historyLogs,
        key,
        getCardOption,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
}

// Створити класс `UserAccount` (для цього завдання можна використати ES6 класс або звичайну функцію)

class UserAccount {
    constructor (name, cards = []) {
        this.name = name;
        this.cards = cards;
    }

// Створює нову карту (використовуйте ‘userCard’ функцію) та додайте її до cards

    addCard () {
        if (this.cards.length < 3) {
            this.cards.push(userCard(this.cards.length + 1));            
        }
    }

// Приймає число в діапазоні {1; 3} і повертає об’єкт карти

    getCardByKey (num) {
        if (num <= 3) {
            return this.cards[num - 1];
        }
        console.log(`Card ${num} is not exist`)
    }
}

let user = new UserAccount('Bob');

user.addCard();
user.addCard();

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

console.log(card1.getCardOption()); 
console.log(card2.getCardOption()); 