import React, { useState, useEffect } from 'react';

// redux
import { useSelector } from 'react-redux';

// Components
import TweetNavBar from './TweetNavBar';
import UserProfile from './UserProfile';
import TweetCard from './TweetCard';

const Tweet = () => {
  const users = useSelector((state) => state.tweet.allUsers);
  const tweets = useSelector((state) => state.tweet.tweets);
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

      {tweets.length !== 0 && (
        <>
          {tweets.map((tweet) => (
            <TweetCard tweet={tweet} />
          ))}
        </>
      )}
    </div>
  );
};

export default Tweet;
