import React from 'react';
import { connect } from 'react-redux';

import './Landing.css';
import logo from '../../../assets/images/logo.svg';


function mapStateToProps(state) {
  return {
    user: state.auth.user,
  }
}

class Landing extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <p>
              Welcome to OMDB Search!
            </p>
            <hr></hr>
            <p>
              Search away, {this.props.user.username}
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Landing);
