import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.js';

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is this project used?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can users test your project?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  }
];

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
    console.log('README created');
  });
}

init();
