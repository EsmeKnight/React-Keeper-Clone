import React from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function Note(props) {

    function handleClick() {
        props.onDelete(props.id)
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <button onClick={handleClick}><DeleteOutlinedIcon /></button>
        </div >
    );
};

export default Note;