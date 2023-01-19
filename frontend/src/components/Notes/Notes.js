import React from 'react';
import './Notes.css';
import Note from "./Note/Note";


class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.notes =[
            {
                id: '2323',
                title: 'Wykopac psa',
                body: 'Bo jest wkurzajacy'
            },
            {
                id: '4323',
                title: 'Wykopac kota',
                body: 'aby nie bylo za dobrze gnojom'
            }
        ];
    }
    render(){

        return (
            <div>
                <p>Moje notatki:</p>

                {this.notes.map(note => (
                         <Note
                             title={note.title}
                             body={note.body}
                             id={note.id}
                         />
                        ))}
            </div>
        );
    }
}


export default Notes;