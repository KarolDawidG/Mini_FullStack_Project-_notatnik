const Note = require('../../dataBase/models/note');


module.exports = {
    saveNote(req, res){

        const newNote = new Note({
            title: 'zrobic zakupy',
            body:'mleko i monka'
        });
        
        newNote.save().then(()=>{
            console.log('Notatka zostala zapisana')
        });

        res.send('Strona glowna dziala');

    }
}