const inquirer = require('inquirer');
const fs = require('fs');
const validator = require('email-validator');
const generateMarkdown = require('./generateMarkdown');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'Name',
        message: 'What is your first and last name?',
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is the Title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Describe your project:',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What are the instructions for use of your project?',
    },
    {
        type: 'list',
        name: 'License',
        message: 'What License do you want to use?',
        choices: ['MIT', 'GNU GPL v3', 'Apache 2.0'],
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Provide instructions on running tests for your application:',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: function (username) {
            if (username) {
                return true;
            }
            
            return 'Please enter your GitHub username';
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function (email) {
            var pass = /*email.match(
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            ); */
            validator.validate(email);
            if (pass) {
                return true;
            }

            return 'Please enter a valid email address';
        },
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log('\nREADME file:');
    console.log(JSON.stringify(answers, null, ' '));
    writeToFile(__dirname + '/output/README.md',answers);
});

// function to write README file
function writeToFile(fileName, data) {
    var fileContent = generateMarkdown(data);
    fs.writeFileSync(fileName, fileContent);
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
