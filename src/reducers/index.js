const initialState = {
    movies: [],  //movie favorites...
    moviesLoaded: [], //movie list after searching...
    movieDetail: {} //movie selected detail...
  }
  
  function rootReducer(state = initialState, action){
    if(action.type === "ADD_MOVIE_FAVORITE"){
      // dispatch(addMovieFavorite({id:10, title: "frozen"}))
      return {
        ...state,
        movies: state.movies.concat(action.payload)
        // [...state.movies, action.payload]
      }
    }
  
    if(action.type === "REMOVE_MOVIE_FAVORITE"){
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      }
    }
  
    if(action.type === "GET_MOVIES"){
      return {
        ...state,
        moviesLoaded: action.payload.Search
      }
    }
  
    if(action.type === "GET_MOVIE_DETAIL"){
      return{
        ...state,
        movieDetail: action.payload
      }
    }
  
    return state; // por default...
  }
  
  export default rootReducer; 
  

  