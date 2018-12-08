import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const emptyNote = {
  title: '',
  details: ''
}

class NoteForm extends Component {
  state = {
    note: emptyNote
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    // if (this.state.note.id) {
    //   this.props.updateNote(this.state.note)
    // } else {
    //   this.props.createNote(this.state.note);
    // }
    console.log(this.state)
  };

//   componentDidMount() {
//     if (this.props.selectedNote !== null) {
//       this.setState({
//         note: this.props.selectedNote
//       })
//     }
//   }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedNote !== this.props.selectedNote) {
      this.setState({
        note: nextProps.selectedNote || emptyNote
      })
    }
  }

  onInputChange = evt => {
    const newNote = this.state.note;
    newNote[evt.target.name] = evt.target.value;
    this.setState({
      note: newNote
    });
  };

  render() {
    const { handleFormClose } = this.props;
    const { note } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Note Title</label>
            <input
              name="title"
              onChange={this.onInputChange}
              value={note.title}
              placeholder="Note Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Note Details</label>
            <input
              name="details"
              onChange={this.onInputChange}
              value={note.details}
              placeholder="Note Details"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleFormClose} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default NoteForm;
