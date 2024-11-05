// TODO: Include packages needed for this application
import fs from 'fs'
import path from 'path'
import inquirer from 'inquirer'
import generateMarkdown from './utils/generateMarkdown.js'
import Choices from 'inquirer/lib/objects/choices.js';
import { type } from 'os';


// TODO: Create an array of questions for user input
const questions = 
[
    {
        type: 'input',
        name: 'title',
        message: 'what do you want the title to be?',

    },
    {
        type: 'input',
        name: 'discription',
        message: 'Describe your project and what your application does',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions for usage',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project that you would like to use',
        choices: ['MIT', 'Apache2.0', 'GPL3.0', 'BSD3', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for contributing',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions',
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your github email',
    },



    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
    fs.writeFile(fileName, data, function (err)
    {
        if(err) throw err;
        console.log("File was succesfully created");
    })
}

// TODO: Create a function to initialize app
function init() 
{
    inquirer.prompt(questions).then((data) =>
    {
        console.log(questions);
        console.log(data);
        
        const readMeFile = generateMarkdown(data);
        console.log(readmeFile);

        writeToFile("generatedReadMe.md",readMeFile);
    })
}

// Function call to initialize app
init();
