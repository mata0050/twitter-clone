import React, { useState } from 'react';
import styled from 'styled-components';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createComment } from '../../redux/actions/tweet';
import { setAlert } from '../../redux/actions/alert';

const CommentCard = ({ tweet, showComment, setShowComment }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const userId = useSelector((state) => state.auth.userId);

  if (comment) {
    console.log({
      tweetID: tweet._id,
      comment,
      userID: userId,
    });
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (comment) {
      dispatch(
        createComment({
          tweetID: tweet._id,
          comment,
          userID: userId,
        })
      );
      setShowComment(!showComment);

    } else {
      dispatch(setAlert('Please enter a comment', 'danger'));
      setShowComment(!showComment);
    }
  };

  return (
    <StyledComment>
      <form onSubmit={onSubmitHandler}>
        <textarea
          type='text'
          value={comment}
          name='comment'
          onChange={(e) => setComment(e.target.value)}
        />

        <input type='submit' value='Comment' />
      </form>
    </StyledComment>
  );
};

const StyledComment = styled.div`
  form {
    padding: 20px 0;

    input,
    textarea {
      border: none;
      border-radius: 10px;
      width: 100%;
    }

    textarea {
      height: 60px;
      padding: 10px;
      font-family: var(--font-family);
      margin-bottom: 10px;
    }

    input {
      height: 45px;
      background: var(--color-lightBlue);
      color: var(--color-white);
    }
  }
`;

export default CommentCard;
