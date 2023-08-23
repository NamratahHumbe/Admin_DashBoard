import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = ({ isLoggedIn, logIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
      logIn(username, password);      
    };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {isLoggedIn ? navigate('/dashboard') : <p className="success-message">Please enter correct username or password!</p>}
    </div>
  );
};

export default Login;