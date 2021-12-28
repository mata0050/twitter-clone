import React, { useState } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';

// CSS
import { StyledInput } from '../../css/LinkButtonsStyle';
import StyledRegister from '../../css/StyledRegister';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../redux/actions/alert';
import { updateUser } from '../../redux/actions/auth';

// Components
import Alert from '../../components/Alert';
import AuthNavBar from '../../components/AuthNavBar';

const Profile = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const userProfile = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    currentPassword: '',
    avatar: '',
    email: '',
  });

  const {
    username,
    password,
    confirmPassword,
    currentPassword,
    email,
    avatar,
  } = formData;

  // if(userProfile.username)  username = userProfile.username;
  // console.log(userProfile);

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
      avatar,
      currentPassword,
    };

    dispatch(updateUser(data));
  };

  // Redirect if logged in
  if (!isAuthenticated) {
    return <Navigate to='/' />;
  }

  return (
    <StyledRegister>
      <div className='register'>
        {/*   navbar    */}
        <AuthNavBar />

        <h2>Update Profile</h2>
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
            type='text'
            name='avatar'
            placeholder='Avatar'
            value={avatar}
            onChange={onChange}
          />
          <p style={{ marginBottom: '10px', marginTop: '30px' }}>
            Enter New password
          </p>
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

          <p style={{ marginBottom: '10px', marginTop: '30px' }}>
            Current password
          </p>
          <StyledInput
            type='password'
            name='currentPassword'
            placeholder='Current Password'
            value={currentPassword}
            onChange={onChange}
            required
          />
          <StyledInput type='submit' value='Update Profile' />
        </form>
      </div>
    </StyledRegister>
  );
};

export default Profile;
