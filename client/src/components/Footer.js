import React from 'react';
import styled from 'styled-components';

// CSS styles
import { StyledLink } from '../css/LinkButtonsStyle';

// Redux
import { useSelector } from 'react-redux';

const Footer = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log(isAuthenticated);
  return (
    <StyledFooter>
      {isAuthenticated ? (
        <>
          <StyledLink to='..' style={{ flex: 0.3 }}>
            Log out
          </StyledLink>
        </>
      ) : (
        <>
          <StyledLink to='/login'>Log in</StyledLink>
          <StyledLink to='/register'>Sign Up</StyledLink>
        </>
      )}
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

  @media only screen and (min-width: 768px) {
    gap: 240px;
  }

  @media only screen and (min-width:992px) {
    gap: 440px;
 
  }
`;

export default Footer;
