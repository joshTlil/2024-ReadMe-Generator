import inquirer from 'inquirer';
import { writeFile } from 'fs';
import  generateMarkdown from './generateMarkdown.js';

const questions = [
    "What is the project's title",
    "Enter description",
    "Installation instructions",
    "License",
    "Test Instructions"
]

const promptUser = (questions) =>{
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: questions[0]
    },
    {
        type: 'input',
        name: 'description',
        message: questions[1]
    },
    {
        type: 'input',
        name: 'instruction',
        message: questions[2]
    },
    {
        type: 'input',
        name: 'license',
        message: questions[3]
    }
    ])
}

const init = () =>{
    promptUser(questions)
    .then((data)=>{
        writeFile("index.html", generateMarkdown(data), (err)=>{
          if (err) throw err;
          console.log("The file has been created")
        })
      })
}

init()