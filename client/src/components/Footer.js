import React from 'react';
import styled from 'styled-components';

// CSS styles
import { StyledLink } from '../css/LinkButtonsStyle';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/auth';

const Footer = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  console.log(isAuthenticated);
  return (
    <StyledFooter>
      {isAuthenticated ? (
        <>
          <div>
            <h1>Don't miss what's happening</h1>
            <p>People on Tweeter are the first to know</p>
          </div>
          <StyledLink
            to='..'
            style={{ flex: 0.4 }}
            onClick={() => dispatch(logout())}
          >
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

  h1,
  p {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    gap: 150px;
    h1,
    p {
      display: block;
      margin-left: 55px;
    }
    h1 {
      margin-top: -5px;
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

  @media only screen and (min-width: 992px) {
    gap: 340px;
  }


  @media only screen and (min-width: 1200px) {
    gap: 540px;
  }
`;

export default Footer;
