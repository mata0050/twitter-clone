import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setAlert } from '../../redux/actions/alert';

// Components
import CommentCard from './CommentCard';

const TweetCard = ({ tweet }) => {
  const { message, date, userID, comment, like, disLike } = tweet;
  const users = useSelector((state) => state.tweet.allUsers);
  const isAuthenticated = true;
  const [profile, setProfile] = useState(null);
  const [showComment, setShowComment] = useState(true);
  const dispatch = useDispatch();

  // Get user profile
  useEffect(() => {
    users.forEach((user) => {
      if (user._id === userID) {
        setProfile(user);
      }
    });
  }, [users]);

  const onClickHandler = () => {
    if (!isAuthenticated) {
      dispatch(setAlert('login to comment on a tweet', 'danger'));
    }
    setShowComment(!showComment);
  };

  return (
    <StyledTweet>
      <article>
        {profile !== null && <img src={profile.avatar} alt='profile pic' />}

        <div className='content'>
          {profile !== null && (
            <header>
              <span>
                {profile.username[0].toUpperCase() +
                  profile.username.substring(1)}
              </span>
              <span>@{profile.username}</span>
              <span> {moment(date).format('MMM DD, YYYY')}</span>
            </header>
          )}

          <p>{message}</p>

          <footer>
            <div className='comment' onClick={onClickHandler}>
              <i class='far fa-comments'></i>
              <span>{comment.length}</span>
            </div>

            <div className='like'>
              <i class='far fa-heart'></i>
              <span>{like.length}</span>
            </div>

            <div className='dislike'>
              <i class='far fa-thumbs-down'></i>
              <span>{disLike.length}</span>
            </div>
          </footer>

          {/* comment card */}
          {showComment && isAuthenticated && <CommentCard />}
        </div>
      </article>
    </StyledTweet>
  );
};

const StyledTweet = styled.div`
  padding: 25px;
  border-bottom: 1px solid var(--color-lightGrey);

  article {
    display: flex;
    flex-direction: row;

    img {
      height: 60px;
      width: 60px;
      border-radius: 60px;
      margin-right: 15px;
    }

    .content {
      width: 70%;

    }

    .content header{
    margin-bottom: 8px;
    span:first-child {
      font-size: 1rem;
      font-size: 600;
    }

    span:nth-child(2) {
      color: var(--color-grey);
      font-size: 0.8rem;
      margin-bottom: 20px;
      margin-left:3px;
    }

    span:last-child {
      font-size:.9rem;
      color: var(--color-grey);
      margin-left: 10px;
    }
  }

  footer{
    margin: 20px 0 0;
    display: flex;
    justify-content: space-between;

    .comment , 
    .like, 
    .dislike{
      i{
        margin-right: 10px;
        font-size:1.3rem;
      }
    }


    .comment:hover , 
    .like:hover, 
    .dislike:hover{
      color: var(--color-blue);
      cursor: pointer;
   
    }
  }


`;

export default TweetCard;
