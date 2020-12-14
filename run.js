var loggerjs = require('./App');

loggerjs.set({fsLog:true,fileName:'pro.log'})
loggerjs.info('Info')
loggerjs.warn('Yeah')
loggerjs('Yeah')
loggerjs.error('Yeah')
loggerjs.emergency('Yeah')  