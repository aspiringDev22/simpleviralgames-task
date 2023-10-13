import React, { useState } from 'react';
import './index.css';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';
import Dashboard from './components/Dashboard';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <Container className='App'>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      {isLogin ? (
       <LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />
      )
      :(
        <Dashboard/>
      ) 
      }
    </Container>
  );
}

export default App;
