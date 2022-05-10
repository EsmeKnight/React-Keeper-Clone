import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function AddCard(props) {
    const [isExpanded, setIsExpanded] = useState(false)

    const [note, setNote] = useState({
        title: "",
        body: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note)
        setNote({
            title: "",
            body: ""
        })
        event.preventDefault()
    }

    function expandTextArea() {
        setIsExpanded(true);
    }


    return (
        <div>
            <form className="add-note">
                {isExpanded ?
                    <input
                        onChange={handleChange}
                        name="title"
                        placeholder="Title"
                        value={note.title}
                    /> : null
                }
                <textarea
                    onClick={expandTextArea}
                    onChange={handleChange}
                    name="body"
                    placeholder="Take a note"
                    value={note.body}
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote} size="small" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default AddCard;