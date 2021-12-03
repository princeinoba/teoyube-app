// Functions to format data

// takes an array of moves
// formats for bulk insert
export function formatBulkMoviesInsert(movies) {
  return movies.map(movie => ({
    updateOne: {
      filter: { imdbID: movie.imdbID },
      update: movie,
      upsert: true,
    },
  }));
}

// takes expected request body / movielist
// strips movie info except for imdbID property to insert into database
// this is because database is designed to not repeat movie entries
// imdbID is used as reference to the movie
export function formatMovieListInsert(movieList) {
  const movieIDs = movieList.movies.map(movie => movie.imdbID);
  const toInsert = { ...movieList, movieIDs: movieIDs };
  delete toInsert.movies;
  return toInsert;
}
