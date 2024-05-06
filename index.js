// TODO: Include packages needed for this application
//insquirer is for the prompts, fs is for writing to file
//md imports the 
const md = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    message: 'Whats the name of your project?',
    name: 'title',
},
{
    message: 'Describe your project',
    name: 'Description',
},
{
    message: 'Why did you make it?',
    name: 'inspiration',
},
{
    message: 'How do we install the project?',
    name: 'install',
},
{
    message: 'How do we use it?',
    name: 'usage',
},
{
    message: 'If another developer would like to contribute how could they?',
    name: 'contribute',
},
{
    message: 'Enter your Github Username',
    name: 'Github',
},
{
    message: 'Enter email address',
    name: 'email',
},
{
    message: 'Link to project repository',
    name: 'projRepo',
},
{
    message: 'If applicable link to the deployed page',
    name: 'projDep',
},
{
    type: "list",
    message: "Which license would you like to use?",
    name: "license",
    choices: ['MIT', 'Apache'],
},];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.MD', data, (err) =>
        err ? console.error(err) : console.log('Logged'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const README = md.generateMarkdown(data)
        writeToFile(README)
    })
}
// Function call to initialize app
init();
