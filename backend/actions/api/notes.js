const Note = require('../../dataBase/models/note');

class NoteActions {
// zapisywanie notatek
    //endPoint do zapisywania notatek
   async saveNote(req, res){
        const title = req.body.title;
        const body = req.body.body;
        let note;

        try{                            //obsluga bledu na wypadek wyslania niepelnej notatki np. bez tytulu
            note = new Note({
                title: title,
                body: body
            });
            await note.save();
        } catch(err){
            return res.status(422).json({message: err.message})
        }


        res.status(201).json(note);
    }
// pobieranie notatek
    async getAllNotes(req, res){
        let doc;
        try{                            //obsluga bledu
            doc = await Note.find({});
        } catch (err){
            return res.status(500).json({message: err.message});
        }

        res.status(200).json(doc);
    }
    //pobieranie notatki
    async getNote(req, res){
        const id = req.params.id;
        const note = await Note.findOne({_id: id}); //znajduje notatke na podstawie id
        res.status(200).json(note);
    }

// aktualizacja notatek
    async updateNote(req, res){
        const id = req.params.id;
        const title = req.body.title;
        const body = req.body.body;

        const note = await Note.findOne({_id: id});
        note.title = title;
        note.body = body;
        await note.save();

        res.status(201).json(note);
    }

// delete notatek
    async delNote(req, res){
    const id = req.params.id;
    await Note.deleteOne({_id: id});

    res.sendStatus(204);        // wysylam tylko status, ze wszystko jest okey
    }
}


module.exports = new NoteActions();