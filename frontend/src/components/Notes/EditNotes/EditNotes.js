import React, {useState} from "react";
import note from "../Note/Note";

function EditNote(props){
    const [title, setTitle] = useState(props.title);
    const [disc, setDisc] = useState(props.body);

    const changeTitleHandler = event => {
        const value = event.target.value;
        setTitle(value);
    }
    const changeDiscHandler = event => {
        const value = event.target.value;
        setDisc(value);
    }
    const editNote =() => {
        const note = {
            title: title,
            body: disc,
            id: props.id
        };
        props.onEdit(note);
    }

    return(
        <div className="note">
            <label>Tytul: </label>
            <input type="text"
                   value={title}
                   onChange={changeTitleHandler} />

            <label>Opis: </label>
            <input type="text"
                   value={disc}
                   onChange={changeDiscHandler} />

            <button onClick={() => editNote()}>Edytuj notatke</button>
        </div>
    )

}


export default EditNote;