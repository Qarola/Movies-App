import React from "react";

import Favorites from "./components/Favorites/Favorites";
import Searching from "./components/Searching/Searching";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";

function App() {
  return (
   
      <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Searching} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />          
      </React.Fragment>
      
  );
}

export default App;