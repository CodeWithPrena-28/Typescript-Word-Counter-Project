#! /usr/bin/env node

// Importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

// Display a colorfull welcome message
console.log(chalk.bold.magenta("\n \t Welcome to ‘Code With Prena’ - Word Counter"));
console.log("=".repeat(62));

// Prompt the user to enter a sentence 
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);

// Trimming the sentence and splitting it into words based on "spaces"

let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence 
console.log("=".repeat(62));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.yellowBright(words.length)}`));
console.log("=".repeat(62));





