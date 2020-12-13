var chalk = require('chalk');

exports.info = (message) => {
    console.log(chalk.blue('(INFO): ' + Date() + ': '  + message))
}