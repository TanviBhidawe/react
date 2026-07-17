import { useEffect, useState } from "react";
import { getMovies } from "./api";

import SearchBar from "../components/searchbar";
import Filter from "../components/filter";
import MovieCard from "../components/moviecard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    const data = await getMovies();

    setMovies(data);
    setLoading(false);
  }

  const genres = {
    Action: 28,
    Comedy: 35,
    Drama: 18,
    Horror: 27
  };

  const filteredMovies = movies.filter((movie) => {
    const matchSearch = movie.title .toLowerCase() .includes(search.toLowerCase());

    const matchGenre =
      genre === "All" ||
      movie.genre_ids.includes(genres[genre]);

    return matchSearch && matchGenre;
  });

  return (
    <div className="container">
      <h1>Movie Explorer</h1>

      <SearchBar  search={search} setSearch={setSearch} />

      <Filter filter={genre} setFilter={setGenre}  />

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="movie-list">
          {filteredMovies.length === 0 ? (
            <h2>Movie Not Found</h2>
          ) : (
            filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Home;