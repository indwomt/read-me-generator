
import inquirer from "inquirer"
import Markdown from "./lib/read-me-gen.js"
import fs from "fs"

console.log('readme gen running')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Installation instructions?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Project usage?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution Info?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions(github)?'
    },
    {
        type: 'list',
        name: 'License',
        message: 'License?',
        choices: ['MIT','ISC','GNUPLv3'],
        filter(val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?'
    }]

    async function runQuery() {
        return inquirer.prompt(questions)
        .then((answers)=>{
            console.log(answers)
            const markdown = Markdown.generateReadme(answers)
            fs.writeFile('README.md', markdown, function(err) {
                if(err) {
                    console.log('Could not save file"')
                    } else {
                        console.log('File created in the current folder')
                    }
            })
            console.log(markdown)
            return answers
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    runQuery()