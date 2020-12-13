const { settings } = require('cluster');

var chalk = require('chalk'),
options = JSON,
fs = require('fs');

// log
var loggerjs = (message) => {
    var log = chalk.green('(LOG): ' + Date() + ': '  + message)
    console.log(log)
}
// info
loggerjs.info = (message) => {
    var info = chalk.blue('(INFO): ' + Date() + ': '  + message)
    console.info(info)
    fsLog(info)
}
// warn
loggerjs.warn = (message) => {
var warn = chalk.yellow('(WARN): ' + Date() + ': '  + message)
console.warn(warn)
fsLog(warn)
}
// error
loggerjs.error = (message) => {
var error = chalk.red('(ERROR): ' + Date() + ': '  + message);
console.error(error)
fsLog(error)
}
// emergency
loggerjs.emergency = (message) => {
var emergency = chalk.bgYellow.red('(EMERGENCY): ' + Date() + ': '  + message);
console.error(emergency)
fsLog(emergency)
}
// settings
loggerjs.set = (option) => {
options = option
loggerMsg('OPTIONS FOUND')
}
// main logging for the logger 
function loggerMsg(message){
    console.log(chalk.bgWhite.green('(LOGGER) : ' + Date() + ': ' + message))
}
// file logging 
function fsLog(logText) {
if(options.fsLog || false){
fs.appendFile(options.fileName||'logs.log',`\n ${logText} \n` , (err) => {
    if (err) throw err;
  });
    }
}
module.exports = loggerjs
