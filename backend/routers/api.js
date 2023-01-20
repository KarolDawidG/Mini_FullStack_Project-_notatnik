const express = require('express');
const router = express.Router();

const notesActions = require('../actions/api/notes');


// pobieranie notatek
router.get('/notes', notesActions.getAllNotes)
router.get('/notes/:id', notesActions.getNote)

// zapisywanie notatek
router.post('/notes', notesActions.saveNote)

// edytowanie notatek
router.put('/notes/:id', notesActions.updateNote)

// usuwanie notatek
router.delete('/notes/:id', notesActions.delNote)


module.exports = router;