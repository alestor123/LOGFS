var loggerjs = require('./App'),
fs = require('fs')

loggerjs.set({fsLog:true,fileName:'pro.log'})
loggerjs.info('Info')
loggerjs.warn('Yeah')
loggerjs.error('Yeah')
loggerjs.emergency('Yeah')