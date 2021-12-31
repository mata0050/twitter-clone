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
 

  // styles
  const theme = {
    marginRight: '20px',
  };



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
          <div>
            <h1>Don't miss what's happening</h1>
            <p>People on Tweeter are the first to know</p>
          </div>
          <div>
            <StyledLink theme={theme} to='/login'>
              Log in
            </StyledLink>
            <StyledLink theme={theme} to='/register'>
              Sign Up
            </StyledLink>
          </div>
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

  @media only screen and (min-width: 838px) {
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

  @media only screen and (min-width: 1032px) {
    gap: 340px;
  }

  @media only screen and (min-width: 1208px) {
    gap: 540px;
  }
`;

export default Footer;
