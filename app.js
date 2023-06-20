const validator = require('validator')
getNotes = require('./notes.js')

const str = getNotes()
console.log(str)

console.log(validator.isURL('https:/mail.com'))
