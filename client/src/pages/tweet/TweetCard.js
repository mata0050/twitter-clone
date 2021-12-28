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
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [profile, setProfile] = useState(null);
  const [showComment, setShowComment] = useState(false);
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

  console.log(users.filter((user) => user._id === '61bd05cde0d274c7d4b14a9f'));
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

          {/* comment form */}
          {showComment && isAuthenticated && (
            <CommentCard
              tweet={tweet}
              showComment={showComment}
              setShowComment={setShowComment}
            />
          )}

          {tweet.comment.length !== 0 && showComment &&<h3>All Comments</h3>}
          {/* show comments */}
          {tweet.comment.length !== 0 && showComment &&
            tweet.comment.map((item) => (
              <div className='show-comment'>
                {users
                  .filter((user) => user._id === item.userID)
                  .map((user) => (
                    <div className='user-comment'>
                      <img
                        src={user.avatar}
                        alt={`user name is ${user.username}`}
                      />
                      <span>{user.username}</span>
                    </div>
                  ))}
                <p>{item.comment}</p>
              </div>
            ))}
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

  h3{
    margin: 20px 0;
  }

  .show-comment{
    border: 1px solid var(--color-lightGrey);
    padding: 8px;
    margin: 15px 0;
    border-radius: 5px;

    .user-comment{
      display: flex;
      margin-bottom: 10px ;

      span{
        font-size:.9rem;
      }

      img{
        width: 30px;
        height: 30px;
      }

    }
  }


`;

export default TweetCard;
