import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContactList from './ContactList';
import Layout from './Layout';
import StatusBar from './StatusBar';

// import Contacts from '../services/contacts';

class AddressBook extends Layout {
  static propTypes = {
    ...Layout.propTypes,
    className: PropTypes.string,
  };

  render() {
    //  console.log(this)
    const { className } = this.props;
    const { contacts } = this.props;

    const element = super.render();

    if (!element) {
      return null;
    }

    return (
      <main className={className}>
        <StatusBar />
        <ContactList items={contacts} />
        {element}
      </main>
    );
  }
}

export default styled(AddressBook)``;
