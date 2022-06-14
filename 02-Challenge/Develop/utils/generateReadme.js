const generateReadMe = (userInputs, element) => {

    let readMeBuildABear = `
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
