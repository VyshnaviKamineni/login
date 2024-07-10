import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = 'user@test.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
      setMessage('Login Successful!');
    } else {
      setMessage('Login Unsuccessful. Please try again.');
    }
  };

  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
        </div>
        <button type="submit" className="btn"> Submit </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
