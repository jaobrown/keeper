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
    isOpen: false
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

  handleCreateNote = newNote => {
    newNote.id = cuid();
    const updatedNotes = [...this.state.Note, newNote];
    this.setState({
      notes: updatedNotes,
      isOpen: false
    });
  };

  render() {
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
              // selectedNote={selectedNote}
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
