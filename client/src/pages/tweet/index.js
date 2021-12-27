import React from 'react';
import { Routes, Route } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';

// Components
import TweetNavBar from './TweetNavBar';
import UserProfile from './UserProfile';
import TweetsCard from './TweetsCard';

const Tweet = () => {
  const users = useSelector((state) => state.tweet.allUsers);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  console.log(users);

  return (
    <div>
      {isAuthenticated ? (
        <>{user !== null && <UserProfile user={user} />}</>
      ) : (
        <>{users.length !== 0 && <UserProfile user={users[0]} />}</>
      )}
      <TweetNavBar />
      
      <TweetsCard /> 
    </div>
  );
};

export default Tweet;
