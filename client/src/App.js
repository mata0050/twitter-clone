import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

// Redux
import { getAllTweets } from './redux/actions/tweet';
import { getAllUsers } from './redux/actions/auth';
import { useDispatch } from 'react-redux';

// Components
import Footer from '../src/components/Footer';
import LeftNavBar from './components/LeftNavBar';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Tweet from './pages/tweet';

function App() {
  const dispatch = useDispatch();

  // Note 
  //will reload to get new tweets every 60 seconds
  useEffect(() => {
    dispatch(getAllTweets());
    dispatch(getAllUsers());
    // setInterval(() => {
    //   dispatch(getAllTweets());
    //   dispatch(getAllUsers());
    // }, 60000);
  }, [getAllUsers, getAllTweets]);

  return (
    <StyledApp>
      <NavBar />
      {/* display content without navigation bars*/}
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      {/* display content with top, side and bottom navBars */}
      <main>
        <div className='black-bar'></div>
        <Routes>
          <Route path='/' element={<Tweet />} />
        </Routes>
      </main>
      <LeftNavBar />
      <Footer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100vh;
  position: relative;

  main {
    position: absolute;
    left: 70px;
    bottom: 65px;
    height: calc(100vh - 65px);
    width: calc(100vw - 70px);
    overflow: scroll;

    /* black bar for top of the nav */
    .black-bar {
      height: 65px;
      width: 100%;
      background: var(--color-black);
    }
  }
`;
export default App;
