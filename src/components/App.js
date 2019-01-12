import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router-dom';

import AddressBook from './AddressBook';
import ContactDetails from './ContactDetails';
import Empty from './Empty';
import Router from './Router';
import Theme from './Theme';
import Contacts from '../services/contacts';

//  const SomeComponent = withRouter(props => <MyComponent {...props}/>);

class App extends Component {
  state = { contacts: [] };

  async componentDidMount() {
    this.setState({ contacts: await Contacts.read() });
    //  console.log(this)
  }

  render() {
    const { contacts } = this.state;

    return (
      <Router>
        <Theme>
          <AddressBook contacts={contacts}>
            <Route
              path="/:id"
              component={props => (
                <ContactDetails {...props} contacts={contacts} />
              )}
            />
            <Route component={Empty} />
          </AddressBook>
        </Theme>
      </Router>
    );
  }
}

export default hot(App);
