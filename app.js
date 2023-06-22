chalk = require('chalk')
getNotes = require('./notes.js')

const cmd = process.argv[2]

if (cmd == 'add') {
    console.log('Adding Note!')
}
else if (cmd == 'remove') {
    console.log('Removing Note!')
}
