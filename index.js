#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from "chalk";
async function askQuestions() {
  const answers = await inquirer
    .prompt([
      {
        type: "list",
        name: "operation",
        message: "Select the operation \n",
        choices: ["Add", "Subtract", "Multiple", "Divide"]
      },
      {
        type: "number",
        name: "x",
        message: chalk.yellow("Enter 1st number: ")
      },
      {
        type: "number",
        name: "y",
        message: chalk.yellow("Enter 2nd number: ")
      }
    ]);
  if (answers.operation == 'Add')
    console.log(chalk.redBright(`Result = \'${answers.x + answers.y}\'`));
  else if (answers.operation == 'Subtract')
    console.log(chalk.redBright(`Result = \'${answers.x - answers.y}\'`));
  else if (answers.operation == 'Multiple')
    console.log(chalk.redBright(`Result = \'${answers.x * answers.y}\'`));
  else if (answers.operation == 'Divide') {
    if (answers.y == 0)
      console.log(chalk.redBright(`MAth Error`));
    else
      console.log(chalk.redBright(`Result = \'${answers.x / answers.y}\'`));
  }
}
async function startAgain() {
  do {
    await askQuestions();
    var again = await inquirer.prompt([
      {
        type: "input",
        name: "restart",
        message: "WANT TO USE CALCULATOR AGAIN (yes | no)? "
      }
    ]);
  } while (again.restart.toLowerCase() == 'y' ||
    again.restart.toLowerCase() == 'yes');
}
startAgain();
