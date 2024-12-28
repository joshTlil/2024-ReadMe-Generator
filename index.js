import inquirer from 'inquirer';
import { writeFile } from 'fs';

inquirer
.prompt([
{
    type: 'input',
    name: 'name',
    message: 'What is your name'
}
])
.then((data)=>{
  writeFile("index.html", data.name, (err)=>{
    if (err) throw err;
    console.log("The file has been created")
  })
})