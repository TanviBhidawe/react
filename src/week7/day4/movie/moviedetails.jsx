import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetails } from "./api";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, []);

  async function fetchMovie() {
    const data = await getMovieDetails(id);
    setMovie(data);
  }

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>

      <h1>{movie.title}</h1>

      <p><strong>Rating:</strong> {movie.vote_average}</p>

      <p><strong>Release Date:</strong> {movie.release_date}</p>

      <p><strong>Overview:</strong> {movie.overview}</p>

    </div>
  );
}
export default MovieDetails;