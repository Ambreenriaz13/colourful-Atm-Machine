#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Initialize user balance and pin coad
let myBalance = 5000;
let myPin = 3456;
// Print Wellcome Message
console.log(chalk.red("\n \tWellcome to coad with Ambreen - ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your Pin coad:"),
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\nPin is Correct,login Successfully!\n"));
    // console.log(`Current Amount Blance is ${ myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an opreation",
            choices: ["withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdrawl meathod:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount",
                    choices: [1000, 2000, 3000, 5000, 10000]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log(chalk.blue("insufficunt Balance"));
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash}withdraw Successfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("insufficunt Balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw successfully`);
                console.log(`Your Remaining is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Amount Balance is: ${myBalance}`);
    }
}
else {
    console.log(chalk.red("Pin is incorrect, Try Again!"));
}
