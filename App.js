var chalk = require('chalk'),
options = JSON,
fs = require('fs');

// spegetti code 
// log
function loggerjs (message) {
    var log = '(LOG): ' + Date() + ': '  + message
    console.log(chalk.green(log))
    fsLog(log)
}
// info
loggerjs.info = (message) => {
    var info = '(INFO): ' + Date() + ': '  + message
    console.info(chalk.blue(info))
    fsLog(info)
}
// warn
loggerjs.warn = (message) => {
var warn = '(WARN): ' + Date() + ': '  + message
console.warn(chalk.yellow(warn))
fsLog(warn)
}


// error
loggerjs.error = (message) => {
var error = '(ERROR): ' + Date() + ': '  + message;
console.error(chalk.red(error))
fsLog(error)
}


// emergency
loggerjs.emergency = (message) => {
var emergency = '(EMERGENCY): ' + Date() + ': '  + message;
console.error(chalk.bgYellow.red(emergency))
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




// remove log 
loggerjs.removeLog = () => {
    cleanLog()
}
function cleanLog(){
    fs.unlinkSync(options.fileName || 'logs.log')
}



// exporting module 
module.exports = loggerjs
