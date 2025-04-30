//Modules:Import/Export
//import logger from './logger/index.js'//import những cái là export default
import {logger2} from './logger/index.js'
//import {TYPE_LOG,TYPE_WARN,TYPE_ERROR} from './constants.js'//import những cái ko là export default
import * as constants from './constants.js'//các import khác
console.log(logger2)
console.log(constants)
// logger('Test message...',TYPE_LOG)
// logger('Test message...',TYPE_WARN)
// logger('Test message...',TYPE_ERROR)
logger2('Test message...',constants.TYPE_LOG)
logger2('Test message...',constants.TYPE_WARN)
logger2('Test message...',constants.TYPE_ERROR)