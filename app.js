// Core modules
// npm modules
chalk = require('chalk')
yargs = require('yargs')
// Files
getNotes = require('./notes.js')

// Customizing yargs version
yargs.version('1.1.0')

// Creating commands
// add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title of Note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: '+argv.title)
        console.log('Body: '+argv.body)
    }
})

// remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Note Removed!')
    }
})

// read command
yargs.command({
    command: 'read',
    describe: 'Reading an existing note',
    handler: function() {
        console.log('Reading existing note!')
    }
})

// list command
yargs.command({
    command: 'list',
    describe: 'List titles of all existing notes',
    handler: function() {
        console.log('Listing titles of all notes')
    }
})

yargs.parse()
