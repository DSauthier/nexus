import React from 'react';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled('div')`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
`;

const Empty = ({ className }) => (
  <Div className={className}>
    <h1>Search for your contact and Double Click it</h1>
  </Div>
);

Empty.defaultProps = {
  className: '',
};

Empty.propTypes = {
  className: PropTypes.string,
};

export default styled(Empty)`
  @media (${props => props.theme['--screen-medium']}) {
    background: #f2f2f2;
    border-left: 1px solid ${props => rgba(props.theme['--color-dark'], 0.1)};
    height: calc(100% - 2.5rem);
    left: 32rem;
    position: fixed;
    top: 2.5rem;
    width: calc(100% - 32rem);
  }
`;
