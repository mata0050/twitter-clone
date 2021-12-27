import React from 'react';

// Redux
import { useSelector } from 'react-redux';
import TweetCard from './TweetCard';

// Component
const TweetsCard = ({ tweet }) => {
  const tweets = useSelector((state) => state.tweet.tweets);

  return (
    <>
      {tweets.length !== 0 && (
        <>
          {tweets.map((tweet) => (
            <TweetCard tweet={tweet} />
          ))}
        </>
      )}
    </>
  );
};

export default TweetsCard;
