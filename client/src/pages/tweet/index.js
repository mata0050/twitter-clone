import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { io } from 'socket.io-client';

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

  // socket io
  // const socket = io('http://localhost:8001');
  // socket.on('connect', () => {
  //   console.log(`You connected with id ${socket.id}`);
  //   // emit will send to use to send tweet
  // });
  let socket = '';
  return (
    <StyledTweet>
      {isAuthenticated && (
        <>{user !== null && <UserProfile user={user} socket={socket} />}</>
      )}
      <TweetNavBar />

      <Routes>
        <Route path='/' element={<TweetsCard socket={socket} />} />
        <Route path='news' element={<NewsCard />} />
        <Route path='news/:id' element={<News />} />
      </Routes>
    </StyledTweet>
  );
};

const StyledTweet = styled.div`
  position: relative;
`;

export default Tweet;
