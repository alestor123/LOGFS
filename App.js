var chalk = require('chalk');

var loggerjs = (message) => {
    console.log(chalk.green('(LOG): ' + Date() + ': '  + message))
}

loggerjs.info = (message) => {
    console.log(chalk.blue('(INFO): ' + Date() + ': '  + message))
}
loggerjs.warn = (message) => {
    console.log(chalk.yellow('(WARN): ' + Date() + ': '  + message))
}
loggerjs.error = (message) => {
    console.log(chalk.red('(ERROR): ' + Date() + ': '  + message))
}

module.exports = loggerjs