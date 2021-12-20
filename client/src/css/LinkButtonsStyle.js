import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  border: 1px solid var(--color-white);
  border-radius: 25px;
  padding: 8px 25px;
  flex: ${props => props.flex || 1};
  text-decoration: none;
  color: var(--color-white);
  text-align: center;
  font-weight: bold;

  

  :last-child {
    background-color: var(--color-white);
    color: var(--color-black);
  }
`;

export const StyledInput = styled.input`
 display: block;
  height: 50px;
  padding-left: 15px;
  margin-bottom: 15px;
  width: 100%;
  border 1px solid var(--color-lightGrey);
  border-radius: 5px;
  background: hsla(0, 0%, 0%, 0.5);
  color: var(--color-white);


  :focus {
    border: 1px solid var(--color-blue);
  }

`
