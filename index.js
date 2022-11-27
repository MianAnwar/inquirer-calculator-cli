import inquirer from 'inquirer';
import chalk from "chalk";
async function askQuestions() {
    const answers = await inquirer
        .prompt([
        {
            type: "list",
            name: "op",
            message: "Select the operation \n",
            choices: ["Add", "Subtract", "Multiple", "Divide"]
        },
        {
            type: "number",
            name: "x",
            message: chalk.yellow("Enter 1st number: "),
            filter(input, answers) {
                if (typeof answers.x == 'number')
                    return new Promise((r, rj) => { rj(); });
            }
        },
        {
            type: "number",
            name: "y",
            message: chalk.yellow("Enter 2nd number: ")
        }
    ]);
    console.log(answers);
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
