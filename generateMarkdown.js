// function to generate markdown for README
function generateMarkdown(data) {
  var lines = [];
  lines.push('# ' + data.Title);
  lines.push('## Description');
  lines.push(data.Description);
  lines.push('## Table of Contents');
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
  var license = '';
  if(data.License === 'MIT') {
    license = createMitLicense(data.Name);
  }
  lines.push(license);

  lines.push('## Contributing');
  lines.push(data.Contributing);
  lines.push('## Tests');
  lines.push(data.Tests);
  lines.push('## Questions');
  lines.push('[' + data.username + '](https://github.com/' + data.username + ')  ');
  lines.push('Contact me with questions at <' + data.email + '>');


  return lines.join('\r\n');
}

module.exports = generateMarkdown;

function createMitLicense (name) {
  return `MIT License

  Copyright (c) 2020 `+name+`
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.`
}