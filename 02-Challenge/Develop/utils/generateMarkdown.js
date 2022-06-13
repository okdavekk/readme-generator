const fs = require('fs');

const writeToFile = (filename, data) => {
  fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
    if (err) console.log(err);
  });
};

const readFromFile = (filename) => {
  return fs.readFileSync(filename, 'utf8');
};

module.exports = {
  writeToFile,
  readFromFile
};






// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
