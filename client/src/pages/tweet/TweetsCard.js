import React from 'react';
import styled from 'styled-components';

// Redux
import { useSelector } from 'react-redux';
import TweetCard from './TweetCard';
import NewsCard from './NewsCard';

// Component
const TweetsCard = ({ tweet }) => {
  const tweets = useSelector((state) => state.tweet.tweets);



  return (
    <StyledTweetsCard>
      <div>
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
