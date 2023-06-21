chalk = require('chalk')
getNotes = require('./notes.js')

const str = getNotes()
console.log(str)

console.log(chalk.bgRed.bold('Error!'))
