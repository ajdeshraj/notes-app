// Core modules
// npm modules
chalk = require('chalk')
yargs = require('yargs')
// Files
notes = require('./notes.js')

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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// read command
yargs.command({
    command: 'read',
    describe: 'Reading an existing note',
    builder: {
        title: {
            describe: 'Title of Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// list command
yargs.command({
    command: 'list',
    describe: 'List titles of all existing notes',
    handler() {
        notes.listNotes()
    }
})

yargs.parse()
