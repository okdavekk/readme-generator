/***************************************************************************************
 * I did my best to make it mine but in the event that this comes back, I would like to thank the below for getting me started in the right direction.
* 
*    Title: readme-generator
*    Author: connietran-dev
*    Date: 13 Jun 22
*    Code version: commit 9112996 (could not get version)
*    Availability: https://github.com/connietran-dev/readme-generator
*
***************************************************************************************/


const inquirer = require('inquirer');
const questions = require('./questions.js');

const fs = require('fs');
const util = require('util');

const generateReadMe = require('./utils/generateReadMe.js');

const writeToFile = (fileName, data) => {
//This structure came from the author above
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
    });
}

//This also came from the author above
const writeFileAsync = util.promisify(writeToFile);


// Main function came from author above but I refactored the functions, arguments, and renamed the const's
async function init() {
    try {

        const userInputs = await inquirer.prompt(questions);

        const readIt = generateReadMe(userInputs);

        await writeFileAsync('generatedREADME.md', readIt);

    } catch (error) {
        console.log(error);
    }
};


init();