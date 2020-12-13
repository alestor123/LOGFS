var chalk = require('chalk');

var loggerjs = (message) => {
    console.log(chalk.green('(LOG): ' + Date() + ': '  + message))
}

loggerjs.info = (message) => {
    console.info(chalk.blue('(INFO): ' + Date() + ': '  + message))
}
loggerjs.warn = (message) => {
    console.warn(chalk.yellow('(WARN): ' + Date() + ': '  + message))
}
loggerjs.error = (message) => {
    console.error(chalk.red('(ERROR): ' + Date() + ': '  + message))
}

module.exports = loggerjs