function renderLicenseBadge(license) {
  if (!license) {
    return ''; // Return empty string if no license
  }
  return `![License Badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''; // Return empty string if no license
  }
  return `https://opensource.org/licenses/${license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''; // Return empty string if no license
  }
  return `
## License

This project is licensed under the ${license} license.  
For more details, visit the [license page](${renderLicenseLink(license)}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install the necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions
If you have any questions, feel free to reach out to me via:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})

`;
}

export default generateMarkdown;