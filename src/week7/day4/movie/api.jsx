export async function getMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=920c59f01fbd1b0fc02da3850bdd4292"
  );

  const data = await response.json();

  return data.results;
}

export async function getMovieDetails(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=920c59f01fbd1b0fc02da3850bdd4292`
  );

  const data = await response.json();

  return data;
}