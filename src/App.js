import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { Container, Menu } from 'semantic-ui-react';
import { UsersTable, UserSearch } from './components';
import Users from './users';

// const store = createStore(Users);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Users,
      term: ''
    };
    this.initialData = Users;
  }

  updateData(config) {
    this.setState(config);
  }

  render () {
    return (
      <div className="App">
        <Menu inverted className="navbar">
          <Menu.Item name='Burlakov Test App' />
        </Menu>
        <Container className="feature_container">
          <UserSearch
            term={this.state.term}
            data={this.initialData}
            update={this.updateData.bind(this)}
          />
        </Container>
        <Container className="table_container">
          <UsersTable data={this.state.data}  />
        </Container>
      </div>
    );
  }
}


export default App;
