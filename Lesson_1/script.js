'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let time = new Date(prompt("Введите дату в формате YYYY-MM-DD"));

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: null,
    income: null,
    savings: false
}

console.log("budget(month) = " + appData.budget);
console.log("date = " + appData.timeData.toDateString());

let quantity = +prompt("Введите количество статей расходов в этом месяце");

for (let i = 0; i < quantity; i++) {
    let expenseName = prompt("Введите обязательную статью расходов в этом месяце");
    let expenseCost = prompt("Во сколько обойдется?");
    appData.expenses.expenseName = expenseCost;    
}

for (let key in appData.expenses) {
    appData.budget = appData.budget - appData.expenses[key];
}

alert("Ваш бюджет на 1 день = " + appData.budget / 30);