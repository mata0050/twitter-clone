import React, { useState } from 'react';
import styled from 'styled-components';

const CommentCard = () => {
  const [comment, setComment] = useState();

  return (
    <StyledComment>
      <form onSubmit=''>
        <textarea
          type='text'
          value={comment}
          name='comment'
          onChange={(e) => setComment(e.target.value)}
        />

        <input type='submit' value='Comment'/>
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
  }`;

export default CommentCard;
