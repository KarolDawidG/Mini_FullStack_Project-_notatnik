const Note = require('../../dataBase/models/note');

class NoteActions {
// zapisywanie notatek
    saveNote(req, res){
        // const newNote = new Note({
        //     title: 'zrobic zakupy',
        //     body:'mleko i monka'
        // });
        //
        // newNote.save().then(()=>{
        //     console.log('Notatka zostala zapisana')
        // });
        const title = req.body.title;
        const body = req.body.body;

        res.send('Notatka zostala stworzona. Tytul: ' + title + ' tresc: ' + body);
    }
// pobieranie notatek
    getAllNotes(req, res){

        res.send('API dziala');
    }
    getNote(req, res){

        res.send('info o notatce');
    }

// edytowanie notatek
    updateNote(req, res){

        res.send('Notatka zaktualizowana');
    }

// delete notatek
    delNote(req, res){
    const id = req.params.id;
        res.send('Notatka usunieta. ID ' + id);
    }
}


module.exports = new NoteActions();