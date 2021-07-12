const Employee= require('./lib/employee');
const Engineer= require('./lib/engineer');
const Manager= require('./lib/manager');
const Intern= require('./lib/intern');

const inquirer= require('inquirer');
const fs= require('fs');

const engineers= [];
const interns= [];
const managers= [];

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
                deleteHTMLfile();
                generateTopHtml();
                generateManagerCard();
                generateEngineerCard();
                generateInternCard();
                generateBottomHtml();
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


const topHtml= () => {
    return ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div class= "jumbotron bg-danger">
            <div class= "container">
                <h1 class= "text-center text-white">My Team</h1>
            </div>
        </div>`
}

const managerCard= (manager) => {
    return `<div class= "row justify-content-around">
    <div class= "card bg-light mb-3" style="max-width: 16rem;">
    <div class= "card-header text-white text-center bg-primary">${manager.name}</div>
    <div class= "card-header text-white text-center bg-primary">Manager</div>
    <div class= "card-body">
        <div class= "list-group">
            <li class= "list-group-item">ID: ${manager.id}</li>
            <li class= "list-group-item">Email: <a href="malito:${manager.email}">${manager.email}</a></li>
            <li class= "list-group-item">Office: ${manager.officeNumber}</li>
        </div>
    </div>
    </div>`
}

const engineerCard= (engineer) => {
    return ` <div class= "card bg-light mb-3" style="max-width: 16rem;">
    <div class= "card-header text-white text-center bg-primary">${engineer.name}</div>
    <div class= "card-header text-white text-center bg-primary">Engineer</div>
    <div class= "card-body">
        <div class= "list-group">
            <li class= "list-group-item">ID: ${engineer.id}</li>
            <li class= "list-group-item">Email: <a href="malito:${engineer.email}">${engineer.email}</a></li>
            <li class= "list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </div>
    </div>
    </div>`
}

const internCard= (intern) => {
    return ` <div class= "card bg-light mb-3" style="max-width: 16rem;">
    <div class= "card-header text-white text-center bg-primary">${intern.name}</div>
    <div class= "card-header text-white text-center bg-primary">Intern</div>
    <div class= "card-body">
        <div class= "list-group">
            <li class= "list-group-item">ID: ${intern.id}</li>
            <li class= "list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class= "list-group-item">School: ${intern.school}</li>
        </div>
    </div>
    </div>`
}

const bottomHtml= () => {
    return ` </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</body>
</html>`
}

const generateBottomHtml= () => {
    fs.appendFileSync("index.html", bottomHtml())
}

const generateInternCard= () => {
    interns.forEach((intern => {
        fs.appendFileSync("index.html", internCard(intern))
    }))
}

const generateEngineerCard= () => {
    engineers.forEach((engineer => {
        fs.appendFileSync("index.html", engineerCard(engineer))
    }))
}

const generateManagerCard= () => {
    managers.forEach((manager => {
        fs.appendFileSync("index.html", managerCard(manager))
    }))
}

const generateTopHtml= () => {
    fs.appendFileSync("index.html", topHtml());
}

const deleteHTMLfile= () => {
    fs.unlinkSync("./index.html");
}

