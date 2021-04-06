import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';


import './Movie.css';


class Movie extends React.Component {
    
    componentDidMount() {
        const { match: { params: { id }}} = this.props;
        this.props.getMovieDetail(id)
        console.log(this.props.movies)
    }

    render() {
        return (
          <div className="App">
            <div className="movie-detail-ctn">
              <div className="movie-card">
              <h2 className="title">
                {this.props.movies.Title}
                <span>{this.props.movies.Rated}</span>
                <p className="description">{this.props.movies.Year}</p>
              </h2>
              <p className="details description">{this.props.movies.Plot}</p>
              </div>
              <div className="movie-detail-ctn2">
                <div className="img">
                  <img src={this.props.movies.Poster} alt=""></img>
                </div>
                <div className="column description">
                  <ul>
                    <p>Actors: {this.props.movies.Actors}</p>
                    <p>Genre: {this.props.movies.Genre}</p>
                    <p>Director: {this.props.movies.Director}</p>
                    <p>Awards: {this.props.movies.Awards}</p>
                    <p>Runtime: {this.props.movies.Runtime}</p>
                    <p>Language: {this.props.movies.Language}</p>
                    <p>IMDb Rating: {this.props.movies.imdbRating}</p>
                  </ul>
                </div>
              </div>  
            </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
  return {
    movies: state.movieDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: id => dispatch(getMovieDetail(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);                   