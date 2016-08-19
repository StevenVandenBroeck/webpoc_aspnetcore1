var path = require('path');

module.exports = {
     context: path.join(__dirname, 'WebClient/js'),
     entry: './index.js',
     output: {
          path: path.join(__dirname, 'wwwroot/js'),
          filename: 'index.bundle.js'
     }
};
