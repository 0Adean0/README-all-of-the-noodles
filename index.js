// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
{
    type:'input',
    message:'What is the name of this project ?',
    name:'title',
},
{
    type:'input',
    message:'Enter the project description.',
    name:'description',
},
{
    type:'input',
    message:'What are the installation instructions for the project, if any ?',
    name:'installation',
},
{
    type:'input',
    message:'What are the usage instructions for the project ?',
    name:'usage',
},
{
    type:'input',
    message:'Was there any collaboration don or materials sourced to complete this project ?',
    name:'credits',
},
{
    type:'input',
    message:'What are the contribution guidelines for this project, if any ?',
    name:'contributions',
},
{
    type:'input',
    message:'What are the test guidelines for this project, if any ?',
    name:'tests',
},
{
    type:'list',
    message:'What is the license that will be attatched to this project ?',
    choices: ['MIT License','Mozilla Public License 2.0','Apache License 2.0','Boost Software License 1.0'],
    name:'license',
},
{
    type:'input',
    message:'What is your GitHub username attatched to this project ?',
    name:'github',
},
{
    type:'input',
    message:'What is your email address associated with this project ?',
    name:'email',
},

]).then((response) => createFile(response))

// TODO: Create a function to write README file
 function createFile (data) {
    const readMeInput = generateMarkdown(data)
    fs.writeFile('README.md',readMeInput, (err) =>
    err ? console.error(err) : console.log("README.md is complete, check the .md file for finished product")
)
}
// TODO: Function call to initialize the application
const init = function () {
    inquirer.createPromptModule(questions)
    .then((data) => createFile(data))
}