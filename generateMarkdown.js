// function to generate markdown for README
function generateMarkdown(data) {
  var lines = [];
  lines.push('# ' + data.Title);
  lines.push('## Description');
  lines.push('***');
  lines.push(data.Description);
  lines.push('## Table of Contents');
  lines.push('***');
  lines.push('* [Installation](#Installation)');
  lines.push('* [Usage](#Usage)');
  lines.push('* [License](#License)');
  lines.push('* [Contributing](#Contributing)');
  lines.push('* [Tests](#Tests)');
  lines.push('* [Questions](#Questions)');
  lines.push('## Installation');
  lines.push(data.Installation);
  lines.push('## Usage');
  lines.push(data.Usage);
  lines.push('## License');
  lines.push('## Contributing');
  lines.push(data.Contributing);
  lines.push('## Tests');
  lines.push(data.Tests);
  lines.push('## Questions');
  lines.push('[' + data.username + '](https://github.com/' + data.username + ')');
  lines.push('Contact me with questions at <' + data.email + '>');


  return lines.join('\n');
}

module.exports = generateMarkdown;
