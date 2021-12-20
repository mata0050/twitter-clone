import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TweetNavBar = () => {
  return (
    <StyledTweets>
      <nav>
        <ul>
          <li>
            <Link to='..'>Tweets</Link>
          </li>
          <li>
            <Link to='..'>News</Link>
          </li>
        </ul>
      </nav>
    </StyledTweets>
  );
};

const StyledTweets = styled.div`
  
  border-bottom: 1px solid var(--color-lightGrey);

  ul {
    display: flex;
    padding: 10px 25px 15px;
    li {
      list-style: none;
      margin-right: 20px;
    }
    a {
      text-decoration: none;
      font-weight: bold;

      color: var(--color-white);
    }

    a:active {
      text-decoration: line;
      color: var(--color-blue);
    }
  }
`;

export default TweetNavBar;
