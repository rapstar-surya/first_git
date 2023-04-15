import React from "react";
import { useNavigate } from "react-router-dom";
import { note } from "./atom-file";
import { useRecoilState } from "recoil";
import { useState } from "react";

export default function EditNote() {
  const [notes, setNotes] = useRecoilState(note);
  const [noteText, setNoteText] = useState("");
  const [editingNoteIndex, setEditingNoteIndex] = useState(-1);
  const Navigate = useNavigate();

  // Function to handle note edit
  const handleNoteEdit = (index) => {
    setNoteText(notes[index]);
    setEditingNoteIndex(index);
  };

  // Function to handle edit button click
  const handleEditButtonClick = () => {
    if (editingNoteIndex !== -1) {
      const updatedNotes = [...notes];
      updatedNotes[editingNoteIndex] = noteText;
      setNotes(updatedNotes);
      setNoteText("");
      setEditingNoteIndex(-1);
    }
  };

  return (
    <>
      <div style={{ paddingLeft: "20px" }}>
        <h1>This is EditNote page</h1>
        <textarea
          name=""
          id=""
          cols="50"
          rows="10"
          style={{ fontSize: "20px" }}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button
          style={{
            marginLeft: "34%",
            border: "2px solid yellow",
            borderRadius: "20px",
            height: "30px",
            width: "70px",
            backgroundColor: "blue",
          }}
          onClick={handleEditButtonClick}
        >
          Submit
        </button>
        <hr />
        <div>
        {notes.map((note, index) => (
          <div key={index} style={{display:'flex', justifyContent:'space-between'}}>
            <p>{note}</p>
            <button onClick={() => handleNoteEdit(index)} 
            style={{marginRight:'25px',marginTop:'25px', height:'20px'}}>Edit</button>
          </div>
        ))}
      </div>
        <br />
        <hr />
      </div>
      <div style={{ paddingLeft: "20px" }}>
        <button onClick={() => Navigate("/")}>Go back to main page</button>
      </div>
      
    </>
  );
}
