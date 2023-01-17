const express = require('express');
const router = express.Router();

const notesActions = require('../actions/api/notes');

router.get('/', notesActions.saveNote)



module.exports = router;