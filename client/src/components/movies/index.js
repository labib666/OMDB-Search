import React from 'react';
import { connect } from 'react-redux'

import Movie from './movie';
import actions from '../../actions';

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    userMovies: state.movies.userMovies,
  }
}

const mapDispatchToProps = dispatch => ({
  addToFavorite: (id) => console.log('add ', id),
  removeFromFavorite: (id) => console.log('remove', id),
  getUserMovies: () => dispatch(actions.movies.getUserMovies()),
});

class Movies extends React.Component {
  componentDidMount() {
    this.props.getUserMovies();
  }
  addToFavorite(id) {
    this.props.addToFavorite(id);
  }
  removeFromFavorite(id) {
    this.props.removeFromFavorite(id);
  }
  render() {
    let { movies = [] } = this.props;
    if (this.props.useUserMovies) {
      movies = [ ...this.props.userMovies ];
    }
    const items = movies.map(m => 
      {
        return (<Movie 
          key={m.id}
          movie={m}
          addToFavorite={this.addToFavorite}
          removeFromFavorite={this.removeFromFavorite}
        />);
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

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
