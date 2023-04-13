// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `The ${renderLicenseLink(license)} serves as the open use basis for this project.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
# README.md-all-of-the-noodles

## Description

${data.description}

## Table of Contents

-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)
-[Contributions](#contributions)
-[Tests](#tests)
-[Questions](#questions)

## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License
${renderLicenseSection(data.license)}
## Contributions
${data.contributions}
## Tests
${data.tests}
## Questions
[Attatched is the embedded link to my GitHub](https://github.com/${data.username})

If you have further questions, email me freely at ${data.email} 
`;
}

module.exports = generateMarkdown;
