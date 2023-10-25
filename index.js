const inquirer = require("inquirer");
const fs = require("fs");

function questions() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Chose the shape of your logo",
                choices: ["Triangle", "Square", "Circle"],
                name: "shape",
            },
            {
                type: "input",
                message:
                    "Include any characters on the shape? (Three Character Limit)",
                name: "text",
            },
            {
                type: "input",
                message:
                    "Choose text color (Enter color keyword OR a hexadecimal number)",
                name: "shapeBackgroundColor",
            },
        ])
        .then((answers) => {
            if(answers.text.length > 3) {
            console.log("Please enter 3 character limit");
            questions();
        } else {
            writeToFile("logo.svg", answers);
        }
        })
    }


questions()