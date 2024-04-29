#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blueBright.bold.italic("\n \tWelcome To Currency Converter\n"));

const currency: any = {
    USD: 1, // Base currency
    PKR: 279, // Pakistan Rupee
    EUR: 0.93, // Euro
    GBP: 0.80, // British Pound Sterling
    INR: 83.40, // Indian Rupee
    SAR: 3.75, // Saudi Riyal
    NZD: 1.68, // New Zealand Dollar
    JPY: 158.41, // Japanese Yen
    CNY: 7.25, // Chinese Yuan
    AUD: 1.53, // Australian Dollar
    CAD: 1.37, // Canadian Dollar
    RUB: 92.28 // Russian Ruble
}

let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Select your Currency:",
            type: "list",
            choices: ["USD", "PKR", "EUR", "GBP", "INR", "SAR", "NZD", "JPY", "CNY", "AUD", "CAD", "RUB"]
        },
        {
            name: "to",
            message: "Select the Currency to convert into:",
            type: "list",
            choices: ["USD", "PKR", "EUR", "GBP", "INR", "SAR", "NZD", "JPY", "CNY", "AUD", "CAD", "RUB"]
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number",
        }
    ]
)

let fromAmount = currency[userAnswer.from] //exchange rate
let toAmount = currency[userAnswer.to] //exchange rate
let amount = userAnswer.amount

if (isNaN(amount)) {
    console.log(chalk.red.red.bold("Invalid Input: Please Enter Valid Numbers"));
}
else {
    let baseAmount = amount / fromAmount  // USD base currency
    let convertAmount = baseAmount * toAmount

    console.log(chalk.green.bold.italic(`\nYour converted currency: ${convertAmount.toFixed(2)}`))
};
