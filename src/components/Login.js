import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({});
  const Navigate = useNavigate();

  const handleData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addUser = (e) => {
    e.preventDefault();
    const userData = localStorage.getItem('gfg');
    const data = JSON.parse(userData);
    if (data && data.uname === formData.uname && data.email === formData.email) {

      localStorage.setItem('loggedIn', 'true');
      Navigate('/usedetails');
    }
  };

  return (
    <div>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          onChange={handleData}
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleData}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
