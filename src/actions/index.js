// getMovies
// getMovieDetail
// addMovieFavorite
// removeMovieFavorite

// ACTION CREATORS
export function addMovieFavorite(payload) { //{id, titulo}
    return {
      type: "ADD_MOVIE_FAVORITE",
      payload
    }
  }
  
  export function removeMovieFavorite(id){
    return {
      type: "REMOVE_MOVIE_FAVORITE",
      payload: id
    }
  }
  
  export function getMovies(title){
    return function (dispatch){
      return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + title)
        .then(response => response.json())
        .then(json => {
          dispatch({type: "GET_MOVIES", payload: json})
        });
      };
  }
  
  export function getMovieDetail(id){
    return function (dispatch){
      return fetch("http://www.omdbapi.com/?apikey=20dac387&i="+id)
        .then(response => response.json())
        .then(json => {
          dispatch({type:"GET_MOVIE_DETAIL", payload:json})
        })
    }
  }
  