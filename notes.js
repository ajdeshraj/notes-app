const fs = require('fs')

const getNotes = function() {
    return "Your notes... "
}

const loadNotes = function() {
    try
    {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e)
    {
        return []
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const addNote = function(title, body) {
    const notes = loadNotes()

    // Checking for duplicate titles
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added!'))
    }
    else {
        console.log(chalk.red.inverse('Note Title Already Exists!'))
    }
}

const removeNote = function(title) {
    const notes = loadNotes()

    // Checking for already existing titles
    const reqdNotes = notes.filter(function(note) {
        return note.title !== title
    })

    if (reqdNotes.length < notes.length) {
        saveNotes(reqdNotes)
        console.log(chalk.green.inverse('Note Removed!'))
    }
    else {
        console.log(chalk.red.inverse('No Such Note Exists!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
