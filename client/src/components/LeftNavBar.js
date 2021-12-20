import React from 'react';
import styled from 'styled-components';

const LeftNavBar = () => {
  return (
    <StyledNavBar>
      <i class="fab fa-twitter"></i>
      <i class='far fa-search'></i>
      <i class="fas fa-cog"></i>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  position: absolute;
  left: 0;
  width: 70px;
  border-right: 1px solid var(--color-lightGrey);
  height: calc(100vh - 65px);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;


  i{
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`;

export default LeftNavBar;
