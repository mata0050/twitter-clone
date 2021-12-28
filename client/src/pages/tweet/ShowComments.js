import React from 'react';
import styled from 'styled-components';

const ShowComments = ({users, tweet }) => {
  return (
    <StyledShowComment>
      {' '}
      <h3>All Comments</h3>
     
      {
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
    </StyledShowComment>
  );
};

const StyledShowComment = styled.div`
  .show-comment {
    border: 1px solid var(--color-lightGrey);
    padding: 8px;
    margin: 15px 0;
    border-radius: 5px;

    .user-comment {
      display: flex;
      margin-bottom: 10px;

      span {
        font-size: 0.9rem;
      }

      img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export default ShowComments;
