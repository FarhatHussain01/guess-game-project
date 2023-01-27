#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
(async () => {
    await showBanner('Farhat Guessing Game', 'Guess The Number', "green");
})();
let score = 0; // at first score must be zero
let continueplaying = true;
async function guessingNumber() {
    while (continueplaying) {
        let randomNumber = Math.floor(Math.random() * 4) + 1;
        console.log(chalk.green(chalk.bold(`The Random Number is " ${randomNumber} "`)));
        const guessnumber = await inquirer
            .prompt([
            {
                name: "yournumber",
                type: "number",
                message: "Enter any number from 1 to 5"
            }
        ]);
        //console.log(guessnumber);
        if (guessnumber.yournumber == randomNumber) {
            console.log(chalk.red("CONG! Ypo select a Correct Number"));
            console.log(`your Score ${score += 10}`);
        }
        else if (guessnumber.yournumber !== randomNumber) {
            console.log("Oops! Try Again");
            score -= 10;
            console.log("After deducting scores from total score", score);
            continueplaying = false;
        }
    }
}
setTimeout(() => {
    guessingNumber();
}, 2000);
//console.log(randomNumber);
