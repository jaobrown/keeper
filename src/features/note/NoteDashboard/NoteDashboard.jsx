import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import cuid from "cuid";
import NoteList from "../../note/NoteList/NoteList";
import NoteForm from "../../note/NoteForm/NoteForm";

const notesList = [
  {
    id: "a",
    title: "Something I need",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper."
  },
  {
    id: "b",
    title: "Something I want",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper."
  },
  {
    id: "c",
    title: "Something I have",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper."
  }
];

class NoteDashboard extends Component {
  state = {
    notes: notesList,
    isOpen: false,
    selectedNote: null
  };

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleFormClose = () => {
    this.setState({
      isOpen: false
    });
  };

  handleUpdateNote = (updatedNote) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === updatedNote.id) {
          return Object.assign({}, updatedNote);
        } else {
          return note
        }
      }),
      isOpen: false,
      selectedNote: null
    })
  };

  handleOpenNote = noteToOpen => () => {
    this.setState({
      selectedNote: noteToOpen,
      isOpen: true
    });
  };

  handleCreateNote = newNote => {
    newNote.id = cuid();
    const updatedNotes = [...this.state.notes, newNote];
    this.setState({
      notes: updatedNotes,
      isOpen: false
    });
  };

  handleDeleteNote = (noteId) => () => {
    const updatedNotes = this.state.notes.filter(e => e.id !== noteId);
    this.setState({
      notes: updatedNotes
    })
  };

  render() {
    const {selectedNote} = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <NoteList
              deleteNote={this.handleDeleteNote}
              onNoteOpen={this.handleOpenNote}
              notes={this.state.notes}
            />
          </Grid.Column>
          <Grid.Column width={6}>
          <Button
              onClick={this.handleFormOpen}
              positive
              content="new note"
            />
          {this.state.isOpen && (
            <NoteForm
              updateNote={this.handleUpdateNote}
              selectedNote={selectedNote}
              handleFormClose={this.handleFormClose}
              createNote={this.handleCreateNote}
            />
          )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default NoteDashboard;
