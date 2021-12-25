import React from 'react';
import styled from 'styled-components';

// CSS styles
import { StyledLink } from '../css/LinkButtonsStyle';
const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink to='/login'>Log in</StyledLink>
      <StyledLink to='/register'>Sign Up</StyledLink>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background: var(--color-blue);
  height: 65px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  gap: 40px;
`;

export default Footer;