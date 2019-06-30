import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = () => {
  return {};
}

class Details extends React.Component {
  render() {
    const {user} = this.props;
    return (
      <div>
        <hr></hr>
        <div>
          <p>Username: {user.username}</p>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
