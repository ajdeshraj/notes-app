const fs = require('fs')

const getNotes = () => "Your notes... "

const loadNotes = () => {
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

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // Checking for duplicate titles
    const duplicateNotes = notes.filter((note) => note.title === title)

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

const removeNote = (title) => {
    const notes = loadNotes()

    // Checking for already existing titles
    const reqdNotes = notes.filter((note) => note.title !== title)

    if (reqdNotes.length < notes.length) {
        saveNotes(reqdNotes)
        console.log(chalk.green.inverse('Note Removed!'))
    }
    else {
        console.log(chalk.red.inverse('No Such Note Exists!'))
    }
}

const listNotes = () => {
    console.log(chalk.magenta('Your Notes...'))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(chalk.cyan(note.title))
    })
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
