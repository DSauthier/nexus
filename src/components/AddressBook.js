import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContactList from './ContactList';
import Layout from './Layout';
import StatusBar from './StatusBar';

const Input = styled('input')`
  width: 100%;
`;

//  We will create a search bar for the address book
//  we will need an input and the value of that input must be included on the "return" of the search

class AddressBook extends Layout {
  //  we will set the state of the input to an empty string at first so we can change it.
  state = {
    searchInput: '',
  };

  static propTypes = {
    ...Layout.propTypes,
    className: PropTypes.string,
  };
  //  we will create a function and pass it as onChange on the input ->  We will update the search input value, everytime the input value is changed by the user.

  updateForm = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    //  we will pass the contacts props(list of contacts) and filter through it -> the filter result must INCLUDE the value of the input

    const { className } = this.props;
    // we will spread the props.contacts to get the whole list-> filter through it
    const contacts = [...this.props.contacts].filter(eachContact => {
      // we will pass the first and last name joined to be the comparison element
      const fullName = eachContact.name.first + eachContact.name.last;
      //  therefore Fullname must include the input value;
      // we will lowercase both fullname and the search input to make the match more precise
      const newContacts = fullName
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
      // we will return the results
      return newContacts;
    });

    const element = super.render();

    if (!element) {
      return null;
    }

    return (
      <main className={className}>
        <StatusBar />
        <Input
          className="input"
          placeholder="Search Contacts"
          type="text"
          id="searchInput"
          onChange={this.updateForm}
        />
        <ContactList items={contacts} />
        {element}
      </main>
    );
  }
}

export default styled(AddressBook)``;
