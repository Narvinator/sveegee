const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes")

function writeToFile(fileName, answers) {
    let svgString = "";

    svgString =
        '<svg version="1.1" width="275" height="200" xmins="http://www.w3.org/2000/svg">';

    svgString += "<g>";

    svgString += `${answers.shape}`;


let shapeOption;
if (answers.shape === "Triangle") {
    shapeOption = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
} else if (answers.shape === "Square") {
    shapeOption = new Square();
    svgString += `<rect x="70" y="40" width="150" fill="${answers.shapeBackgroundColor}"/>`;
} else {
    shapeOption = new Circle();
    svgString += `<circle cx="150" cy="110" r="90" fill="${answers.shapeBackgroundColor}"/>`;
}

svgString += `<text x="150" y="120" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

svgString += "</g>";

svgString += "</svg>";

fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("logo.svg");
});
}


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
            if (answers.text.length > 3) {
                console.log("Please enter 3 character limit");
                questions();
            } else {
                writeToFile("logo.svg", answers);
            }
        })
}



questions()