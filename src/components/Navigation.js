import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    const isLoggedIn = storedLoggedIn === 'true';

    setLoggedIn(isLoggedIn);
  });
  
  
  const handleLogout = () => {
    localStorage.setItem('loggedIn', 'false');
    setLoggedIn(false);
  };

  return (
    <div className="container">
      {loggedIn? (
        <ul className="nav">
          <li className="nav-item">
            <Link to="/userdetails" className="nav-link">
              User Details
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <button onClick={handleLogout} className="btn btn-outline-success" type="button">
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul className="nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navigation;
