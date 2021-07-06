const Employee= require('./lib/employee');
const Engineer= require('./lib/engineer');
const Manager= require('./lib/manager');
const Intern= require('./lib/intern');

const inqurier= require('inquirer');
const fs= require('fs');
const inquirer = require('inquirer');

const addTeamMember= () => {
    inqurier
        .prompt([
            {
                type: 'confirm',
                name: 'addTeamMember',
                message: 'Would you like to add another team member?',
            },
        ])
        .then ((answers) => {
            if (answers.addTeamMember === true) {
                firstquestion();
            }
            else {
                console.log(managers, engineers, interns);
                module.exports= managers;
                module.exports= engineers;
                module.exports= interns;
                return answers;
            }
        });
};

const firstquestion= () => {
    inqurier
        .prompt ([
            {
                type:'list',
                name: 'role',
                message: 'What is your role?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])
        .then ((answers) => {
            if (answers.role === 'Manager') {
                managerQuestions();
            }
            else if (answers.role === 'Engineer') {
                engineerQuestions();
            }
            else if (answers.role === 'Intern') {
                internQuestions();
            }
        });
};

const managerQuestions= () => {
    inquirer
        .prompt ([
            {
                type: "input",
                name: "name",
                message: "What is your name?",
            },
            {
                
            }
        ])
}