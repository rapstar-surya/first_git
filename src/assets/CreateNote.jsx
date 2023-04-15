import React from "react";
import { useNavigate } from "react-router-dom";
import { note } from "./atom-file";
import { useRecoilState } from "recoil";
import { useState } from "react";

export default function CreateNote() {
  const [notes, setNotes] = useRecoilState(note);
  const [noteText, setNoteText] = useState("");
  const [editingNoteIndex, setEditingNoteIndex] = useState(-1);
  const [submittedNoteText, setSubmittedNoteText] = useState("");
  const Navigate = useNavigate();

  // Function to handle note submission
  const handleNoteSubmit = () => {
    if (noteText) {
      if (editingNoteIndex !== -1) {
        // Editing existing note
        const updatedNotes = [...notes];
        updatedNotes[editingNoteIndex] = noteText;
        setNotes(updatedNotes);
        setEditingNoteIndex(-1);
      } else {
        // Adding new note
        setNotes([...notes, noteText]);
      }
      setSubmittedNoteText(noteText);
      setNoteText("");
    }
  };

  return (
    <>
      <div style={{ paddingLeft: "20px" }}>
        <h1>This is Create Note page</h1>
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
          onClick={handleNoteSubmit}
        >
          Submit
        </button>
        <hr />
        <div style={{ paddingLeft: "20px" }}>
        {/* Render list of notes */}
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
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
