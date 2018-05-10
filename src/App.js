import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Menu } from 'semantic-ui-react';
import { UsersTable } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu inverted>
          <Menu.Item name='home'/>
          <Menu.Item name='messages'/>
          <Menu.Item name='friends'/>
        </Menu>
        <Container>
          <UsersTable />
        </Container>  
      </div>
    );
  }
}


export default App;
