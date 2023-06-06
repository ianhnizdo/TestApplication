import React, { useState, useEffect } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const url = `/api/routes/login`;
      const loginRequest = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = loginRequest.json();
      if (data.match) {
        console.log('the user information is correct');
      } else {
        console.log('the user information is not in the database');
      }
    } catch (error) {
      console.log('error with handle submit functionality,', error);
    }
  }

  return (
    <section className="Login">
      <form className="Login" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.value)}
        ></input>
        <input type="password" placeholder="password"></input>
        <button type="submit"></button>
      </form>
      <button>Forgot your password?</button>
      <button>Create Account</button>
    </section>
  );
}
