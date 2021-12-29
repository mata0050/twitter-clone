import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

// CSS styles
import { StyledLink } from '../css/LinkButtonsStyle';

// Redux
import { useSelector } from 'react-redux';
import Alert from './Alert';

const NavBar = () => {
  const navigate = useNavigate();
  const username = useSelector((state) => state.auth.username);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.userId);
  const allTweets = useSelector((state) => state.tweet.tweets);
  const location = useLocation();

  // all the users Tweeters
  const userTweets =
    allTweets.length !== 0 &&
    allTweets.filter((t) => t.userID === userId).length;


    console.log(allTweets);

  return (
    <StyleContainer>
      <StyledNavBar>
        {location.pathname !== '/' && (
          <i class='fas fa-arrow-left' onClick={() => navigate(-1)}></i>
        )}
        <div className='account-name'>
          <span>{username !== null ? `@${username}` : 'Tweeter'}</span>
          <span>
            {!isAuthenticated
              ? 'Welcome to Tweeter'
              : `${userTweets} Tweets`}
          </span>
        </div>
        {!isAuthenticated && (
          <StyledLink flex='0.3' to='/login'>
            Log in
          </StyledLink>
        )}
      </StyledNavBar>
      <Alert />
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100vw - 70px);
  border-bottom: 1px solid var(--color-lightGrey);
  background: hsla(0, 0%, 0%, 0.5);
  z-index: 2;
`;

const StyledNavBar = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  i{
    cursor: pointer;
  }

  i:hover{
    color: var(--color-blue);
  }

  .account-name {
    display: flex;
    flex:.9;
    margin-left: 30px;
    flex-direction: column;

    span{
      font-weight: 600;
      font-size: 1.2rem;
      
      :last-child {
        font-weight: 400;
        font-size: .9rem;
        margin-top: 5px;
        color: white;
    }
  }
`;

export default NavBar;
