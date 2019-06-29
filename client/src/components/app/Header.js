import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = () => {
  if (true) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = () => {
  if (false) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={'/signup'}
            className="nav-link">
            <img src='' className="user-pic" alt='DP ' />
            USer
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { state } = this;
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            OMDB Search
          </Link>

          <LoggedOutView />

          <LoggedInView />
        </div>
      </nav>
    );
  }
}

export default Header;
