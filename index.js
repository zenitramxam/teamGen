const Employee= require('./lib/employee');
const Engineer= require('./lib/engineer');
const Manager= require('./lib/manager');
const Intern= require('./lib/intern');

const inquirer= require('inquirer');
const fs= require('fs');

const managers= [];
const engineers= [];
const interns= [];

const addTeamMember= () => {
    inquirer
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
                console.log("HTML has been updated!")
                return answers;
            }
        });
};


const firstquestion= () => {
    inquirer
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
firstquestion();



const managerQuestions= () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your ID number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your Email?',
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is your office number?',
            },
        ])
        .then ((answers) => {
            const newManager= new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.office,
            );
            managers.push(newManager);
            addTeamMember();
        })
};



const engineerQuestions= () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your ID number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your Email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your github username?',
            },
        ])
        .then ((answers) => {
            const newEngineer= new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github,
            );
            engineers.push(newEngineer);
            addTeamMember();
        });
};

const internQuestions= () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your ID number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your Email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school do you attend?',
            },
        ])
        .then ((answers) => {
            const newIntern= new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school,
            );
            interns.push(newIntern);
            addTeamMember();
        });
};


