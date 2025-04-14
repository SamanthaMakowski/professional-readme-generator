function renderLicenseBadge(license) {
    if (license === 'None') return '';
    return `![License](https://img.shields.io/badge/License-${license.replace(/ /g, '%20')}-blue.svg)`;
  }
  
  function renderLicenseSection(license) {
    if (license === 'None') return 'This project is not licensed.';
    return `This project is licensed under the ${license} license.`;
  }
  
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
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions, feel free to contact me:
  
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  `;
  }
  
  export default generateMarkdown;

  