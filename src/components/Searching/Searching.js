import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Searching.css';

import { addMovieFavorite, getMovies } from '../../actions/index.js';

// Como es un componente de clase necesito realizar si o si un constructor
// no se olviden de llamar a super(props) !
// ahi mismo definimos nuestro estado inicial !

export class Searching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  
  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="App">
        <form className="inp" onSubmit={(e) => {
          this.handleSubmit(e);
          //this.setState({ title: '' }); //Ver esta línea, borra el estado para que el value del input desaparezca.
          }}>  
          <input 
          type="text" 
          placeholder="Search by movie title" 
          id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
                <button type="submit">search</button>
         {/*  <button type="submit"><i className="fa fa-search"></i>Search</button> */}
        </form>
        <div className='list-ctn'>
         {this.props.movies ? this.props.movies.map(movie =>
         <div className="movies-list">
          <div className='movie-link'>
            <NavLink className='movie-link' to={`/movie/${movie.imdbID}`}>
              {movie.Title}
            </NavLink>
          </div>
          <button className='fav-btn' onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>
            Favorite
          </button>
         </div>) : null}
         </div>
         <div className="page-footer">Made with <span>❤</span> by Carolina Altamiranda N.</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searching);



  /* render() {
    const { title } = this.state;
    return (
      <div className="App">
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title"></label>
            <input className="box-search"
              type="text"
              id="title"
              placeholder="Search by movie title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">search</button>
        </form>
        <ul>
       
         {
           this.props.movies.map((movie, i) => {
            return (
              <div className="list-group">
              <div key={i}>
                <NavLink to={`/movie/${movie.imdbID}`}>
                {movie.Title}
                </NavLink>
                <button onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>Fav</button>
              </div>
              </div>
            )
           })
         }
         
        </ul>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}


function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searching);
 */