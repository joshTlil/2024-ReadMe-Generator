import inquirer from 'inquirer';
import { writeFile } from 'fs';

const questions = [
    "What is you name",
    "Project Title",
    "Enter description",
    "Installation instructions",
    "Usage information",
    "Test Instructions"
]

const promptUser = () =>{
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name'
    }
    ])
}

const init = () =>{
    promptUser()
    .then((data)=>{
        writeFile("index.html", data.name, (err)=>{
          if (err) throw err;
          console.log("The file has been created")
        })
      })
}

init()