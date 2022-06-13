// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();



const inquirer = require('inquirer');
const fs = require('fs');
const { inherits } = require('util');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Enter a desciption of the project',
        },


        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information',
        },

        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution guidelines',
          },

          {
            type: 'input',
            name: 'test',
            message: 'Enter test instructions',
          },


        // {
        //     type: 'checkbox',
        //     name: 'stack',
        //     message: 'What languages do you know?',
        //     choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
        // },
        // {
        //     type: 'list',
        //     name: 'contact',
        //     message: 'What is your preferred method of communication?',
        //     choices: ['email', 'phone', 'telekinesis'],
        // },
    ])
    .then((data) => {
        const filename = `${data.title.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, 2), (err) =>
            err ? console.log(err) : console.log('Success!')
        );

        console.log(data)
    });

// //   init()




// const { prompt } = require('inquirer');
// const utils = require('./utils/utils');
// const questions = require('./questions.js');

// const init = async () => {
//   let result;
//   const data = await prompt(questions);
//   if (data.contact === "phone" || data.contact === "email") {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     const information = JSON.parse(utils.readFromFile(filename)) || [];

//     information.push(data);

//     utils.writeToFile(filename, information);

//     const { confirm } = await prompt([
//       {
//         type: 'confirm',
//         message: 'Would you like to enter your contact info?',
//         name: 'confirm'
//       }
//     ]);

//     if (!confirm) process.exit();

//     result = await prompt([
//       {
//         type: 'input',
//         name: data.contact,
//         message: `What is your ${data.contact}`
//       }
//     ]);

//     if (result) {
//       information[information.length - 1] = { ...data, ...result };
//       utils.writeToFile(filename, information);
//     }
//   }
// };

// init();