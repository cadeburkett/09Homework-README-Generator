const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// array of questions for user
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Insert Title',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Insert Description',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Steps to install',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How to use',
    },
    {
        name: 'credits',
        type: 'input',
        message: 'List collaborators and third-party contributions',
    },
    {
        name: 'license',
        type: 'input',
        message: 'List licensing (Githib, MIT, Etc.)',
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Test info',
    },
    {
        name: 'questions',
        type: 'input',
        message: 'Insert contact for follow up questions',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./output/" + fileName, data, function(error) {
        if (error) {throw error}
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        writeToFile("README.md", generateMarkdown(response))
    });
}

// function call to initialize program
init();
