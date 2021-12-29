import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Redux
import {useSelector} from 'react-redux';


const TweetNavBar = () => {
  const allNews = useSelector((state) => state.news.allNews);
  return (
    <StyledTweets>
      <nav>
        <ul>
          <li>
            <Link to='/'>Tweets</Link>
          </li>
          {allNews &&
          <li>
            <Link to='/news'>News</Link>
          </li>}
        </ul>
      </nav>
    </StyledTweets>
  );
};

const StyledTweets = styled.div`
  position: sticky;
  top: 65px;
  background: black;

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
