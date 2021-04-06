import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index.js";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() { 
    return (
      <div className="App">
        <div className='title'>
          <h2>Movies Favorites</h2>
        </div>
        <ul className='list-ctn'>
          {this.props.movies.map((movie) => { 
            return (   
              <div key={movie.id}>
         <div className="movies-list">
          <div>
            <Link className='movie-link' to={`/movie/${movie.id}`}>
              {movie.title}
            </Link>
          </div>
          <button className='delete-btn' onClick={() => this.props.removeMovieFavorite({title: movie.title, id: movie.id})}>
            Remove
          </button>
          </div>
         </div>)}
          )}
        </ul>
        <div className="page-footer2">Made with <span>❤</span> by Carolina Altamiranda N.</div>
      </div>
    );
  }
}




function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);