import React from 'react';
import { Link } from 'react-router-dom';

class LoggedOutView extends React.Component {
  render() {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>

      </ul>
    );
  };
};

export default LoggedOutView;
  