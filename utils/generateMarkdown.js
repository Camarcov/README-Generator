// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
      break
    case 'Apache':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
      break
    default:
      return ''
      break
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)'
      break
    case 'Apache':
      return '[Apache License](https://opensource.org/licenses/Apache-2.0)'
      break
    default:
      return ''
      break
  }
}
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'License Unavailable':
      return ''
      break
    default:
      return `This repository uses ${renderLicenseLink(license)} for more information click the link.`
      break
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
const license = data.license

  return `# ${data.title}   
${renderLicenseBadge(license)}

## Description

${data.description}
${data.inspiration}
  
## Table of Contents
* [Description](#Desription)
* [How to Install](#Installation)
* [How to Use](#Usage)
* [License](#License)
* [Contribution](#Contributing)
* [Questions](#Questions)

## Installation

${data.install}

## Usage

${data.usage}

## License
${renderLicenseSection(license)}

## Contributing

${data.contribute}
${data.projRepo}
${data.projDep}

## Tests
Any bugs from any testing you preform please send to the contact info below.

## Questions
If you have any questions regarding the project you can direct them to 
* My [GitHub Profile](https://www.github.com/${data.Github})
* Also feel free to contact me via email: ${data.email}
`
}

module.exports = { generateMarkdown }
