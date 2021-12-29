import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { broadcastTweet } from '../../redux/actions/tweet';

// Component
import TweetCard from './TweetCard';
import NewsCard from './NewsCard';

const TweetsCard = ({ tweet, socket }) => {
  const tweets = useSelector((state) => state.tweet.tweets);
  const [receivedTweet, setReceivedTweet] = useState(null);
  const [allReceivedTweet, setAllReceivedTweet] = useState([]);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  socket.on('receive-tweet', (tweet) => {
    // console.log(tweet);
    setReceivedTweet(tweet);
    setState(true);
  });

  useEffect(() => {
    if (state) {
      const isMatch =
        allReceivedTweet.length !== 0 &&
        allReceivedTweet.filter(
          (item) => item.message === receivedTweet.message
        );

        
      console.log('ismatch', isMatch);
      if (isMatch.length >= 1) {
        return;
      } else {
        setAllReceivedTweet([...allReceivedTweet, receivedTweet]);
      }
      setState(false);
    }
  }, [receivedTweet, allReceivedTweet]);

  console.log(state);
  console.log(receivedTweet);
  console.log(allReceivedTweet);

  return (
    <StyledTweetsCard>
      <div>
        {allReceivedTweet.length !== 0 && (
          <>
            {' '}
            {allReceivedTweet.map((tweet) => (
              <TweetCard tweet={receivedTweet} />
            ))}{' '}
          </>
        )}
        {tweets.length !== 0 && (
          <>
            {tweets.map((tweet) => (
              <TweetCard tweet={tweet} />
            ))}
          </>
        )}
      </div>

      <div className='width-30'>
        <h1 id='news'>Today's News</h1>
        <NewsCard />
      </div>
    </StyledTweetsCard>
  );
};

const StyledTweetsCard = styled.div`
  display: flex;
  .width-30 {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .width-30 {
      margin-top: 30px;
      display: block;
      position: sticky;
      top: 125px;
      width: 36vw;
      right: 0;
      height: 75vh;
      overflow: scroll;

      #news {
        margin-left: 10px;
        margin-bottom: -30px;
        font-size: 1.7rem;
      }

      h1 {
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

export default TweetsCard;
