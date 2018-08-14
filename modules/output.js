const chalk = require('chalk');

function output(style, ...value) {
    const styled = value.shift();
    return console.log(chalk[style](styled), ...value);
}

module.exports = output;