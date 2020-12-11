import React, { useEffect, useState } from 'react'
import Main from './pages/main'
import Login from './pages/login'
import { getQueryParams } from './utils'

function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  function checkLogin() { 
    const { token } = getQueryParams();

    const jwt = localStorage.getItem('token', token);

    if(jwt) {
      setIsLoggedIn(true);
    } else if (token !== undefined) {
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
    };
  }

  return (
    <div className='App'>
      {isLoggedIn ? <Main /> : <Login /> }
    </div>
  )
}

export default App