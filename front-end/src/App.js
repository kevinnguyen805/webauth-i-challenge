import React, {useState, useEffect} from 'react';
import {Route, NavLink} from 'react-router-dom'
import Users from './components/Users'
import Register from './components/Register'
import Login from './components/Login'
import './App.css';

function App(props) {
  
  // CREDENTIALS FOR USERS 
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  useEffect( () => {

  },[])


  return (
    <div className="App">
      <NavLink to='/register'> Register </NavLink>
      <NavLink to='/login'> Login </NavLink>
      <NavLink to='/user'> Users </NavLink>

      <div>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/user' render={(props) => <Users {...props} credentials={credentials} />} />
      </div>
    </div>
  );
}

export default App;
