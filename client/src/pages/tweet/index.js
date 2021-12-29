import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// redux
import { useSelector } from 'react-redux';

// Components
import TweetNavBar from './TweetNavBar';
import UserProfile from './UserProfile';
import TweetsCard from './TweetsCard';
import NewsCard from './NewsCard';
import News from './News';

const Tweet = () => {
  const users = useSelector((state) => state.tweet.allUsers);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  console.log(users);

  return (
    <StyledTweet>
      {isAuthenticated && <>{user !== null && <UserProfile user={user} />}</>}
      <TweetNavBar />

      <Routes>
        <Route path='/' element={<TweetsCard />} />
        <Route path='news' element={<NewsCard />} />
        <Route path='news/:id' element={<News />} />
      </Routes>

      <div className='width-30'>
        <h1 id='news'>Today's News</h1>
        <NewsCard />
      </div>
    </StyledTweet>
  );
};

const StyledTweet = styled.div`
  position: relative;

  @media only screen and (min-width: 768px) {
    .width-30 {
      position: absolute;
      top: 65px;
      width: 36vw;
      right: 0;
      height: 75vh;
      overflow: scroll;

      #news{
        margin-left: 10px;
        margin-bottom: -30px;
        font-size: 1.7rem;
      }

      h1{
        font-size: 1.2rem;
      }

      /* width */
      ::-webkit-scrollbar {
        width: 15px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: var(--color-blue);
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: var(--color-lightBlue);
      }

      overflow-x: hidden;
    }
  }
`;

export default Tweet;
