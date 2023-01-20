import React, {useState} from "react";


function NewNote(props){

    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [disc, setDisc] = useState('');

    const changeTitleHandler = event => {
        const value = event.target.value;
        setTitle(value);
    }
    const changeDiscHandler = event => {
        const value = event.target.value;
        setDisc(value);
    }

    const addNote = () =>{
        const note = {
            title: title,
            body: disc
        };
        props.onAdd(note);
        setTitle('');
        setDisc('');
        setShowForm(false);
    }

    return(
        showForm ? (
        <div className="note">
            <label>Tytul: </label>
            <input type="text"
                   value={title}
                   onChange={changeTitleHandler} />

            <label>Opis: </label>
            <input type="text"
                   value={disc}
                   onChange={changeDiscHandler} />

            <button onClick={() => addNote()}>Dodaj notatke</button>
        </div>
        ): (
            <button onClick={()=>setShowForm(true)}>Nowa notatka</button>
        )
    );
}


export default NewNote;