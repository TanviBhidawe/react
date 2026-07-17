import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./movie/home";
import MovieDetails from "./movie/moviedetails";
import "./movie.css"

function Movie() {
  return (
  

      <Routes>

        <Route path="/" element={<Home />} />
       <Route path="/movie/:id"  element={<MovieDetails />}  />

      </Routes>

  
  );
}

export default Movie;