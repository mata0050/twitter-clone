import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { io } from 'socket.io-client';

// Redux
import { getAllTweets } from './redux/actions/tweet';
import { getAllUsers, loadUser } from './redux/actions/auth';
import { getAllNews } from './redux/actions/news';
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
  const socket = io('http://localhost:8001')
  socket.on('connect', () => {
    console.log(`You connected with id ${socket.id}`)
    // emit will send to use to send tweet
    socket.emit('custom-event', {a: 'hellloo'})
  })


  // Note
  //will reload to get new tweets every 60 seconds
  useEffect(() => {
    dispatch(getAllTweets());
    dispatch(getAllUsers());
    dispatch(getAllNews());
    dispatch(loadUser())
    // setInterval(() => {
    //   dispatch(getAllTweets());
    //   dispatch(getAllUsers());
    // }, 60000);
  }, [getAllUsers, getAllTweets, getAllNews, loadUser]);

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
