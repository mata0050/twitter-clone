import React, { useState } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';

// CSS
import { StyledInput } from '../../css/LinkButtonsStyle';
import StyledRegister from '../../css/StyledRegister';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../redux/actions/alert';
import { registerUser } from '../../redux/actions/auth';
import { getAllTweets } from '../../redux/actions/tweet';
// Components
import Alert from '../../components/Alert';
import AuthNavBar from '../../components/AuthNavBar';

const Register = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

 

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

    dispatch(registerUser(data));
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Navigate to='/' />;
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


export default Register;
