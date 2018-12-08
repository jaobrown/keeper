import React, { Component } from "react";
import { Segment, Item, Button } from "semantic-ui-react";

class NoteListItem extends Component {
  render() {
    const { note, onNoteOpen, deleteNote } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as="a">{note.title}</Item.Header>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment clearing>
          <span>{note.details}</span>
          <Button
            // onClick={deleteNote(note.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            // onClick={onNoteOpen(note)}
            as="a"
            color="teal"
            floated="right"
            content="Edit"
          />
        </Segment>
      </Segment.Group>
    
    );
  }
}

export default NoteListItem;
