// TODO: Include packages needed for this application
//insquirer is for the prompts, fs is for writing to file
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    message: 'Whats the name of your project?',
    name: 'projectName',
},{
    message: 'Describe your project',
    name: 'projDesc',
},
{
    message: 'Why did you make it?',
    name: 'projInsp',
},
{
    message: 'How do we use it?',
    name: 'projUse',
},
{
    message: 'Link your Github',
    name: 'Github',
},{
    message: 'Link to Project Repo',
    name: 'projRepo',
},{
    message: 'If applicable link to the Deployed page',
    name: 'projDep',
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions)}

// Function call to initialize app
init();
