import React, { Component } from 'react';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
// import './style/style.scss'

import Icon from '../Icon';
import Link from '../Link';

// =--=-=-=-=-=style==-=--=-=-=-==-=-

const Container = styled('section')`
  border: 2px solid black;
`;
const Header = styled('header')``;
const Div = styled('div')`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
const Hr = styled('hr')`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
`;
const Article = styled('article')`
  border: 2px solide red;
`;
const Img = styled('img')`
  width: 20vw;
  border-radius: 3px;
  transition: transform 0.2s;
  color: black;
  box-shadow: 5px 5px 5px;
  &:hover {
    transform: scale(1.1);
    box-shadow: 3px 3px 1px;
  }
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
border-radius:50%;
background-color: #ea074b;
background-image: linear-gradient(0deg,#ea074b 0%, #2af598 100%);
animation: ${morph} 1s linear infinite, ${spin} 1s ease-in-out infinite;

}

`;
// const newDiv = styled('div')`
// display:flex;

// `;

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

  componentDidMount() {
    // console.log('receive')
    // console.log('page we are on', this.props.match.params.id)
    // console.log('all contacts', this.props.contacts)
    const { contacts } = this.props;
    const { props } = this;
    const contact = { contacts }.contacts.find(
      specificContact => specificContact.id === { props }.props.match.params.id,
    );
    // console.log('conctact', contact)
    if (contact) {
      this.setState({ contact });
    }
    //  console.log('page we are on',this.props.match.params.id)
    //  console.log('all contacts', this.props.contacts)
  }

  componentWillReceiveProps() {
    // console.log('receive')
    // console.log('page we are on', this.props.match.params.id)
    // console.log('all contacts', this.props.contacts)
    const { contacts } = this.props;
    // const {match} = this.props.match;
    // console.log("1231412412312312312",contacts)
    const { props } = this;
    const { id } = { props }.props.match.params;
    const contact = contacts.find(specificContact => specificContact.id === id);
    // console.log('conctact', contact)
    if (contact) {
      this.setState({ contact });
    }
  }

  componentWillUpdate() {
    // console.log('update')
  }

  render() {
    const { className } = this.props;
    // const { data } = this.state;
    const { contact } = this.state;

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
            <h1>
              <Ball />
              Name:
              {contact.name.first}
              {contact.name.last}
            </h1>
            <Hr />
            <h1>
Gender :
              {contact.gender}
            </h1>
            <br />
            <h1>
              <Icon>email</Icon>
              Email :
              {contact.email}
            </h1>
            <br />
            <h1>
              <Icon>phone</Icon>
              Cell:
              {contact.cell}
            </h1>
          </Div>
          <br />
        </Div>
      </Article>
    );
  }
}

// background: ${props => props.theme['--color-light']};
export default styled(ContactDetails)`
  background: lightgrey;
  height: calc(100% - 2.5rem);
  position: fixed;
  top: 2.5rem;
  width: 100%;
  color: blue;
  text-shadow: 1px 1px black;
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
