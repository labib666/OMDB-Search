import React from 'react';
import { connect } from 'react-redux'

import Movie from './movie';

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
  }
}

class Movies extends React.Component {
  render() {
    const { movies = [] } = this.props;
    const items = movies.map(m => 
      {
        return (<Movie key={m.id} movie={m}/>);
      }
    );
    return (
      <div>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Movies);
