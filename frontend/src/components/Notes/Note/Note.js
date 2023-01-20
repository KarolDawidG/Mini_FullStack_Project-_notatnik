import React, {useState} from "react";

function Note(props){
    const editHandler = () => {
        props.onEdit({
            title:props.title,
            body:props.body,
            id:props.id
        });
    }

    const [showDesc, setShowDesc] = useState(false);  //tak jakby tablica stanow
    const wysunDesc = ()=>{             //funkcja przekazuje przeciwny stan (jak bylo wysuniete, to wsunie :p)
        setShowDesc(!showDesc);
    }
    return (
        <div className="note">
            <p onClick={()=>wysunDesc()}>{props.title}</p>          {/* klikniecie tytulu powoduje pokazanie tresci */}
            {showDesc ?                                            //if ktory domyslnie chowa opis
                ( <div className="description">{props.body}</div>
                ):null}
            <button onClick={editHandler}>Edytuj</button>
            <button className="delete" onClick={()=>props.onDelete(props.id)}>Usun</button>
        </div>
    );
}

export default Note;