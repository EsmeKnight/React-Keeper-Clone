import React, { useState } from "react";

function AddCard(props) {
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


    return (
        <div>
            <form>
                <input
                    onChange={handleChange}
                    name="title"
                    placeholder="Title"
                    value={note.title}
                />
                <textarea
                    onChange={handleChange}
                    name="body"
                    placeholder="Take a note"
                    value={note.body}
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </div >
    );
}

export default AddCard;