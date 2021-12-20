import React from 'react';
import styled from 'styled-components';

// CSS styles
import { StyledLink } from '../css/LinkButtonsStyle';

const NavBar = () => {
  return (
    <StyledNavBar>
      <i class='fas fa-arrow-left'></i>
      <div className='account-name'>
        <span>@Frank</span>
        <span>45 tweets</span>
      </div>
      <StyledLink flex='0.3' to='..'>
        Log in
      </StyledLink>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100vw - 70px);
  height: 65px;
  border-bottom: 1px solid var(--color-lightGrey);
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 2;
  background: hsla(0, 0%, 0%, 0.5);

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
        color: var(--color-lightGrey)
    }
  }
`;

export default NavBar;
