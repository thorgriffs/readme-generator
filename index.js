const inquirer = require('inquirer');
const fs = require('fs');


// array of questions for user
const questions = [
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
            var pass = email.match(
                // reg ex to validate email address formatting
            );
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
});

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
