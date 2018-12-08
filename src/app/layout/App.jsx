import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import NavBar from '../../features/nav/NavBar/NavBar';
import NoteDashboard from '../../features/note/NoteDashboard/NoteDashboard';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container className="main">
          <NoteDashboard/>
        </Container>
      </div>
    );
  }
}

export default App;
