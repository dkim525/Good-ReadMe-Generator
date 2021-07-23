//needed packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

//question array
const questions = [
    {
        type: 'input',
        message: 'title your project',
        name: 'title'
    },
    {
        type: 'input',
        message: 'briefly describe your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'briefly explain installation',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'briefly explain how to start your project in the command line',
        name: 'usage'
    },
    {
        type: 'list',
        name: 'license',
        message: 'which license do you use?',
        choices: ['Apache 2.0', 'AGPL v3', 'MIT', 'none']
    },
    {
        type: 'input',
        message: 'any guidelines for contribution?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'briefly input tests for project',
        name: 'test'
    },
    {
        type: 'input',
        message: 'what is your github user name?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'what is your email address',
        name: 'email'
    },
];

//function to write README file
function writeToFile(template, data) {
    console.log(template);
    console.log(data)
    fs.writeFile(template, generateMarkdown(data), (error) => {
        error ? console.log(error) : console.log('Success')
    })
}

//function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            let template = 'README.md'
            writeToFile(template, data)
        })
}

// Function call to initialize app
init();