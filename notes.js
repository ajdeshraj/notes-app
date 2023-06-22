const fs = require('fs')

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
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)    // find stops after single match

    if (!duplicateNote) {   // if (duplicateNote === undefined)
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New Note Added!'))
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
        console.log(chalk.green('Note Removed!'))
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

const readNote = (title) => {
    const notes = loadNotes()

    reqdNote = notes.find((note) => note.title === title)

    if (reqdNote) {
        console.log(chalk.inverse(reqdNote.title))
        console.log(reqdNote.body)
    }
    else {
        console.log(chalk.red.inverse('Note Not Found!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
