const mongoose = require('mongoose');

const NoteSchemat = new mongoose.Schema({
    title: {
        type: String,
        required: true,          //wymaga aby schemat notatki nie dopuszczal pustego obiektu
    },
    body: {
        type: String,
        required: true,
    },
});

const Note = mongoose.model('Note', NoteSchemat);

module.exports = Note;