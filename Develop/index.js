// TODO: Include packages needed for this application
//insquirer is for the prompts, fs is for writing to file
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    message: 'Whats the name of your project?',
    name: 'name',
}, {
    message: 'Describe your project',
    name: 'overview',
},
{
    message: 'Why did you make it?',
    name: 'inspiration',
},
{
    message: 'How do we use it?',
    name: 'howToUse',
},
{
    message: 'Link your Github',
    name: 'Github',
}, {
    message: 'Link to Project Repo',
    name: 'projRepo',
}, {
    message: 'If applicable link to the Deployed page',
    name: 'projDep',
},];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.MD', data, (err) =>
        err ? console.error(err) : console.log('Logged'))
}

const createREADME = (data) =>
    `# ${data.name}
    
    ## Overview
    ${data.overview}
    ${data.inspiration}
    
    ## How to use
    ${data.howToUse}

    ## Links
    ${data.Github}
    ${data.projRepo}
    ${data.projDep}`


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const README = createREADME(data)
        writeToFile(README)
    })
}
// Function call to initialize app
init();
