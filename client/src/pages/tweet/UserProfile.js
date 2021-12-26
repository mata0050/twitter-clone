import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

// Redux
import { useSelector } from 'react-redux';

// generate random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const UserProfile = ({ user }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { avatar, username, date } = user;
  const [tweet, setTweet] = useState();
  const randomNumber = getRandomInt(90);

  console.log(tweet);

  function onSubmit(e) {
    e.preventDefault();
    // Note dispatch tweet
    console.log('woork');
    setTweet('');
  }

  return (
    <StyledUserProfile>
      <div
        className='bg'
        style={{
          backgroundImage: `url(https://picsum.photos/id/${randomNumber}/500/600)`,
        }}
      />

      {/* avatar and follow button */}
      <div className='avatar'>
        <img src={avatar} alt='user profile pic' />
        {isAuthenticated ? (
          <button
            style={{
              background: 'var(--color-blue)',
              color: 'var(--color-white)',
            }}
          >
            Create Tweet
          </button>
        ) : (
          <button>Follow</button>
        )}
      </div>

      {/*  user info*/}
      <div className='user-info'>
        <span>{username[0].toUpperCase() + username.substring(1)}</span>
        <span>@{username}</span>
        <span>
          <i class='fas fa-table'></i> Joined {moment(date).format('MMMM YYYY')}
        </span>
      </div>

      {/* create tweet input */}
      <form onSubmit={onSubmit}>
        <textarea
          type='text'
          value={tweet}
          name='tweet'
          onChange={(e) => setTweet(e.target.value)}
        />
        <input type='submit' />
      </form>
    </StyledUserProfile>
  );
};

const StyledUserProfile = styled.div`
  .bg {
    height: 150px;
    width: 100%;
  }

  .avatar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-top: -40px;

    img {
      height: 90px;
      width: 90px;
      border-radius: 90px;
    }

    button {
      height: 40px;
      font-size: 0.9rem;
      font-weight: bold;
      padding: 5px 15px;
      border-radius: 20px;
      margin-top: 50px;
    }
  }

  .user-info {
    display: flex;
    flex-direction: column;
    padding: 20px 25px;

    span:first-child {
      font-size: 1.5rem;
      font-size: 600;
    }

    span:nth-child(2) {
      color: var(--color-grey);
      font-size: 0.9rem;
      margin-bottom: 20px;
    }

    span:last-child {
      i {
        color: var(--color-blue);
      }
      color: var(--color-grey);
    }
  }

  form {
    padding: 10px 25px;

    input, textarea {
      border: none;
      border-radius: 10px;
      width: 100%;
    }

    textarea {
      height: 100px;
      padding: 10px;
      font-family: var(--font-family);
      margin-bottom: 10px;
    }

    input{
      height: 45px;
      background: var(--color-lightBlue);
      color: var(--color-white);
    }

  }
`;

export default UserProfile;
