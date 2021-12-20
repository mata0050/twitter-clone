import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AuthNavBar = () => {
  return (
    <StyledAuthBar>
      <Link to='/'>
        <i class='fas fa-times'></i>
      </Link>
      <i class='fab fa-twitter'></i>
    </StyledAuthBar>
  );
};

const StyledAuthBar = styled.div`
  font-size: 1.6rem;
  margin-top: -20px;
  margin-bottom: 25px;
  display: flex;

  a i {
    color: var(--color-white);
    border-radius: 100%;
    padding: 4px;
    height: 35px;
    width: 35px;
    text-align: center;
    border-radius: 100%;
  }

  a i:hover {
    background: var(--color-lightGrey);
  }

  i,
  a {
    flex: 1;
  }
`;

export default AuthNavBar;
