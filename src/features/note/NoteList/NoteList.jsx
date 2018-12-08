import React, { Component } from "react";
import NoteListItem from "../NoteList/NoteListItem";

class NoteList extends Component {
  render() {
    const { notes, onNoteOpen, deleteNote} = this.props;
    return (
      <div>
        <h1>Notes</h1>
        {notes.map(note => (
          <NoteListItem
            deleteNote={deleteNote}
            key={note.id}
            note={note}
            onNoteOpen={onNoteOpen}
          />
        ))}
      </div>
    );
  }
}

export default NoteList;
