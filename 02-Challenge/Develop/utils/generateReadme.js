// const fs = require('fs');




const generateReadMe = (userInputs, element) => {

    let readMeBuildABear = 

//    function (userInputs) {
//         let Apache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
//         let MIT = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
//         if (userInputs.license === "Apache License 2.0") {
//             return (Apache)
//         } else if (userInputs.license=== "MIT License") {
//             return (MIT)
//         };
//         return true;

//     }


`    
    
# ${userInputs.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description 

${userInputs.description}

## Installation 

${userInputs.installation}

## Usage 

${userInputs.usage}

## Contributing 

${userInputs.contributing}

## Tests 

${userInputs.tests}  

## License

${userInputs.license}


## Questions?

### Github: [${userInputs.github}](https://github.com/${userInputs.github})

### Reach Me Via Email: ${userInputs.email}

`

    return readMeBuildABear;
}

module.exports = generateReadMe;
