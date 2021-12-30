import React from 'react';
import styled from 'styled-components';

const NewToTweeterCard = () => {
  return (
    <StyledTweeterCard>
      <h2>New to Tweeter?</h2>
      <span>Sign up now to get your own personalized timeline!</span>
      <button>Sign up with email</button>
      <span>
        By signing up, you agree to the{' '}
        <span className='blue-font'>Terms of Service </span> and{' '}
        <span className='blue-font'>Privacy Policy</span>, including{' '}
        <span className='blue-font'>Cookie Use</span>.
      </span>
    </StyledTweeterCard>
  );
};

const StyledTweeterCard = styled.div`
  border: 1px solid var(--color-lightGrey);
  border-radius: 15px;
  margin: 25px;
  padding: 20px;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  span {
    font-size: 0.9rem;
    color: var(--color-grey);
    display: block;
  }

  button {
    margin: 25px 0;
    font-size: 1rem;
    width: 100%;
    border-radius: 35px;
    font-weight: bold;
  }

  .blue-font {
    color: var(--color-blue);
    display: inline;
  }

  @media only screen and (max-width: 992px) {

    h2{
      font-size: 1.2rem;
    }
    button {
      font-size: 0.8rem;
      padding: 15px;
    }
  }
`;

export default NewToTweeterCard;
