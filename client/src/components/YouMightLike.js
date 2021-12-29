import React from 'react';
import styled from 'styled-components';

// Redux
import { useSelector } from 'react-redux';

const YouMightLike = () => {
  const allUser = useSelector((state) => state.tweet.allUsers);
  return (
    <StyledYouMightLike>
      <h3>You might like</h3>
      {allUser.slice(0, 3).map((user) => (
        <div className='container'>
          <img src={user.avatar} alt='' />
          <div className='flex'>
            <p>{user.username}</p>
            <span>@{user.username}</span>
          </div>
        </div>
      ))}
    </StyledYouMightLike>
  );
};

const StyledYouMightLike = styled.div`
  background: #15181c;
  border-radius: 15px;
  margin: 25px;
  padding: 20px;

  img {
    width: 50px;
    height: 50px;
    object-fit: center;
    border-radius: 50px;
  }

  .container {
    margin: 30px 0;
    display: flex;
    align-items: center;

    .flex {
      margin-left: 15px;
      p {
        font-size: 0.9rem;
      }

      span{
        margin-top: -5px;
        font-size: 0.8rem;
        color:var(--color-grey);
      }
    }
  }
`;

export default YouMightLike;
