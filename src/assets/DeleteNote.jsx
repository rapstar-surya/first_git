import React from "react";
import { useNavigate } from "react-router-dom";
import { note } from "./atom-file";
import { useRecoilState } from "recoil";

export default function DeleteNote() {
  const [notes, setNotes] = useRecoilState(note);
 
  const Navigate = useNavigate();

  // Function to handle note delete
  const handleNoteDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <>
      <div style={{ paddingLeft: "20px" }}>
        <h1>This is Delete Note page</h1>
        
        <hr />
        <div>
          {notes.map((note, index) => (
            <div key={index} style={{display:'flex', justifyContent:'space-between'}}>
              <p>{note}</p>
              <button onClick={() => handleNoteDelete(index)}
              style={{marginRight:'25px',marginTop:'25px', height:'20px'}}
              >Delete</button>
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
