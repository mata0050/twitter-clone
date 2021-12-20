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

  console.log(users);

  return (
    <div>
      {users.length !== 0 && <UserProfile user={users[0]} />}
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
