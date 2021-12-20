import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import AuthNavBar from '../../components/AuthNavBar';
import { StyledInput } from '../../css/LinkButtonsStyle';

const Login = () => {
  const [formData, setFormData] = useState({
    password: '',
    email: '',
  });

  const { password, email } = formData;

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyledLogin>
      <div className='login'>
        {/*   navbar    */}
        <AuthNavBar />

        <div className='form'>
          <h2>Sign in to Twitter</h2>

          <form onSubmit={onSubmit}>
            <StyledInput
              type='email'
              name='email'
              placeholder='Email'
              value={email}
              onChange={onChange}
            />
            <StyledInput
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={onChange}
            />

            <StyledInput
              type='submit'
              value='Login'
            />
          </form>
          <span>
            Don't have an account? <Link to='/register'>Register</Link>
          </span>
        </div>
      </div>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  position: absolute;
  z-index: 14;
  background: var(--color-black);
  top: 0;
  left: 0;

  .login {
    width: 100vw;
    height: 100vh;
    padding: 40px;
    position: relative;

    .form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 75%;
      padding: 30px;
      h2 {
        margin-bottom: 25px;
        font-size: 1.4rem;
      }

      input:last-child {
        background: var(--color-white);
        font-weight: 600;
        border-radius: 30px;
        bottom: 40px;
        color: var(--color-black);
      }
    }

    span {
      margin-top: 20px;
      color: var(--color-grey);

      a {
        color: var(--color-blue);
        text-decoration: none;

        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
export default Login;
