const fs = require('fs');


const generateLicense = (type) => {
    let color;
    if (type === "MPL") color = "red";
    if (type === "GPL") color = "grey";
    if (type === "Apache") color = "green";
    if (type === "MIT") color = "blue";
    if (type === "CC") color = "orange";
    if (type === "BSD") color = "goldenrod";

    return (
`        
![License](https://img.shields.io/badge/license-${type}-${color})
`
    );

};



const generateReadMe = (userInputs, element) => {

    let readMeBuildABear = 

`    
    
# ${userInputs.title}

${generateLicense(userInputs.license)}


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
