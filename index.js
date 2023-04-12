// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const markdownFile = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
{
    type:'input',
    message:'What is the name of this project ?',
    name:'Title',
},
{
    type:'input',
    message:'Enter the project description.',
    name:'Description',
},
{
    type:'input',
    message:'What are the installation instructions for the project, if any ?',
    name:'Installation',
},
{
    type:'input',
    message:'What are the usage instructions for the project ?',
    name:'Usage',
},
{
    type:'input',
    message:'Was there any collaboration don or materials sourced to complete this project ?',
    name:'Credits',
},
{
    type:'input',
    message:'What are the contribution guidelines for this project, if any ?',
    name:'Contribution',
},
{
    type:'input',
    message:'What are the test guidelines for this project, if any ?',
    name:'Test',
},
{
    type:'list',
    message:'What is the license that will be attatched to this project ?',
    options: ['MIT',''],
    name:'License',
},
{
    type:'input',
    message:'What is your GitHub username attatched to this project ?',
    name:'Github',
},
{
    type:'input',
    message:'What is your email address associated with this project ?',
    name:'Email',
},

];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
