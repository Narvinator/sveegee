function questions() {
    inquirer
    .prompt([
{
    type: "list",
    message: "Chose the shape of your logo",
    choices: ["Triangle", "Square", "Circle"],
    name: "shape",
},
])
.then((answers) => {}
})