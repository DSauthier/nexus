import React, { Component } from 'react';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
// import './style/style.scss'

import Icon from '../Icon';
import Link from '../Link';

// =--=-=-=-=-=style here==-=--=-=-=-==-=-

const Container = styled('section')`
  border: 2px solid black;
`;
const Header = styled('header')``;
const Div = styled('div')`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 2vw 0px;
  text-transform: capitalize;
`;

const Article = styled('article')``;
const Img = styled('img')`
  width: 20vw;
  border-radius: 10px;
  transition: transform 0.2s;
  color: black;
  box-shadow: 5px 5px 5px;
  &:hover {
    transform: scale(1.1);
    box-shadow: 3px 3px 1px;
  }
  border: 1 px solid black;
`;

const morph = keyframes`
 0% {border-radius: 5px;}
  50% {border-radius: 50%;}
  100% {border-radius: 5px;}
`;

const spin = keyframes`
  from {transform: rotate(0deg);}
  to{transform: rotate(360deg);}
`;

const Ball = styled('div')`
position: relative;
top: 15px;
right: 25px;
width: 15px;
height: 15px;
background-image: radial-gradient( white, black );
animation: ${morph} 1s linear infinite, ${spin} 1s ease-in-out infinite;
}

`;

const H1 = styled('h1')`
  border-bottom: 0.1rem solid rgba(6, 52, 84, 0.1);
  width: 100%;
`;

// -==--=-=-=style ends -=-=-=-=-=-=

class ContactDetails extends Component {
  static defaultProps = {
    className: '',
    contacts: '',
  };

  static propTypes = {
    className: PropTypes.string,
    contacts: PropTypes.string,
  };

  state = {
    contact: { name: {}, picture: {} },
  };

  //  ComponentWillReceiveProps will pass the props from the list > than will compare the selected contact id and will match it with the contact id from the list >if exists(which will exist since it will only be clickable if exists) return the contact found

  componentWillReceiveProps() {
    const { contacts } = this.props;

    const { props } = this;
    const { id } = { props }.props.match.params;
    const contact = contacts.find(specificContact => specificContact.id === id);

    if (contact) {
      this.setState({ contact });
    }
  }

  //  now we render our contact details, accessing it state with this.state and getting the information needed.
  render() {
    const { className } = this.props;
    // const { data } = this.state;
    const { contact } = this.state;

    const fullName = `${contact.name.first} ${contact.name.last}`;
    // Regular Html goes here
    return (
      <Article className={className}>
        <Header>
          <Link to="/">
            <Icon>arrow_back_ios</Icon>
          </Link>
        </Header>
        <Div>
          <Div>
            <Img src={contact.picture.large} alt={contact.name.first} />
          </Div>
          <Div>
            <H1>
              <Ball />
              Name :
              {fullName}
            </H1>
            <br />
            <H1>
              <Ball />
              Gender :
              {contact.gender}
            </H1>
            <br />

            <H1>
              <Ball />
              {/* <Icon><ColoredIcon>email</ColoredIcon></Icon> */}
              Email :
              {contact.email}
            </H1>
            <br />
            <H1>
              <Ball />
              Cell :
              {/* <Icon><ColoredIcon>phone</ColoredIcon></Icon> */}
              {contact.cell}
            </H1>
          </Div>
          <br />
        </Div>
      </Article>
    );
  }
}

// background: ${props => props.theme['--color-light']};
export default styled(ContactDetails)`
  background: #f2f2f2;
  height: calc(100% - 2.5rem);
  position: fixed;
  top: 2.5rem;
  width: 100%;
  color: black;
  text-shadow: 1px 1px white;
  //
  ${Header} {
    ${props => props.theme['--font-extra-large']};
    align-items: center;
    display: flex;
    height: 5rem;
    justify-content: center;
    text-align: center;

    ${Icon} {
      height: 5rem;
      left: 0;
      line-height: 5rem;
      position: absolute;
      top: 0;
      width: 5rem;
    }
  }

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (${props => props.theme['--screen-medium']}) {
    border-left: 1px solid ${props => rgba(props.theme['--color-dark'], 0.1)};
    left: 32rem;
    width: calc(100% - 32rem);
  }
`;
