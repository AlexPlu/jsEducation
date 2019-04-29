'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = new Date(prompt("Введите дату в формате YYYY-MM-DD"));

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: null,
    savings: true
}

function chooseExpenses() {
    let quantity = +prompt("Введите количество статей расходов в этом месяце");

    for (let i = 0; i < quantity; i++) {
        let expenseName = prompt("Введите обязательную статью расходов в этом месяце");
        let expenseCost = prompt("Во сколько обойдется?");

        if (typeof (expenseName) === 'string' && typeof (expenseName) != null && typeof (expenseName) != null &&
            expenseName != '' && expenseCost != '' && expenseName.length < 50) {
            console.log("done");
            appData.expenses[expenseName] = expenseCost;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i < 3; i++) {
        let optExpenseName = prompt("Статья необязательных расходов?");

        if (typeof (optExpenseName) === 'string' && typeof (optExpenseName) != null && typeof (optExpenseName) != null &&
            optExpenseName != '' && optExpenseName.length < 50) {
            appData.optionalExpenses[i] = optExpenseName;
        } else {
            i = i - 1;
        }
    }
}
chooseOptExpenses();

for (let key in appData.expenses) {
    appData.budget = appData.budget - appData.expenses[key];
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на 1 день = " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();