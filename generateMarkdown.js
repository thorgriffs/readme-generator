// function to generate markdown for README
function generateMarkdown(data) {
  var lines = [];
  lines.push('# ' + data.Title);
  var badge = '';
  if(data.License === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if(data.License === 'Apache 2.0') {
    badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if(data.License === 'GNU GPL v3') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  lines.push(badge);
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
  lines.push('## Contributing');
  lines.push(data.Contributing);
  lines.push('## Tests');
  lines.push(data.Tests);
  lines.push('## Questions');
  lines.push('Have questions?  Contact me on [GitHub](https://github.com/' + data.username + ') or email <' + data.email + '>');
  lines.push('## License');
  var license = '';
  if(data.License === 'MIT') {
    license = createMitLicense(data.Name);
  }
  else if(data.License === 'Apache 2.0') {
    license = createApacheLicense(data.Name);
  }
  else if(data.License === 'GNU GPL v3') {
    license = createGnuLicense(data.Name);
  }
  lines.push('>' + license);


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
};

function createApacheLicense (name) {
  return `Copyright 2020 `+name+`

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
      http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.`
};

function createGnuLicense (name) {
  return `Copyright (C) 2020  `+name+`

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.`
};