import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// CSS
import { StyledInput } from '../../css/LinkButtonsStyle';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../redux/actions/alert';
import { register } from '../../redux/actions/auth';

// Components
import Alert from '../../components/Alert';
import AuthNavBar from '../../components/AuthNavBar';

const Register = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const { username, password, confirmPassword, email } = formData;

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return dispatch(setAlert('Password is not matching', 'danger'));
    }

    if (username === '') {
      return dispatch(setAlert('Enter Username', 'danger'));
    }

    if (email === '') {
      return dispatch(setAlert('Enter Enter', 'danger'));
    }

    const data = {
      username,
      password,
      email,
    };

    dispatch(register(data));
  };


    // Redirect if logged in
    if (isAuthenticated) {
      return navigate('/');
    }

  return (
    <StyledRegister>
      <div className='register'>
        {/*   navbar    */}
        <AuthNavBar />

        <h2>Create your account</h2>
        <Alert />

        <form onSubmit={onSubmit}>
          <StyledInput
            type='text'
            name='username'
            placeholder='Username'
            value={username}
            onChange={onChange}
          />
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
            type='password'
            placeholder='Confirm Password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={onChange}
          />
          <StyledInput type='submit' value='Register' />
        </form>
      </div>
    </StyledRegister>
  );
};

const StyledRegister = styled.div`
  position: absolute;
  z-index: 14;
  background: var(--color-black);
  top: 0;
  left: 0;

  .register {
    width: 100vw;
    height: 100vh;
    padding: 40px;
    position: relative;

    h2 {
      margin-bottom: 25px;
      font-size: 1.4rem;
    }

    /* NOTE: fix Register button styles */
    input:last-child {
      background: var(--color-white);
      font-weight: 600;
      border-radius: 30px;
      position: absolute;
      bottom: 40px;
      color: var(--color-black);
      /* left: 0;
      right: 0;
      margin: 0 40px; */
      /* margin: 0 auto; */
      width: 85%;
    }
  }
`;
export default Register;
