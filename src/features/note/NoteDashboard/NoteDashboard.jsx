import React, { Component } from 'react';
import {Grid, Button} from 'semantic-ui-react';

export class NoteDashboard extends Component {
  render() {
    return (
      <div>
        <Grid>
            <Grid.Column width={10}>
            <h1>Left Column</h1>
            </Grid.Column>
            <Grid.Column width={6}>
            <h1>Right Column</h1>
            </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default NoteDashboard
