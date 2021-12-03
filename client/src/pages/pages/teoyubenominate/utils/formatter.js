export function formatOMDBMovie(movie) {
  return {
    title: movie.Title,
    year: movie.Year,
    imdbID: movie.imdbID,
    poster: movie.Poster,
  };
}

// need to make a deep copy of nominations
// since removing the pending property
export function formatToSend(nominations) {
  const toSend = [];
  for (const nomination of nominations) {
    const toFormat = { ...nomination };
    delete toFormat.pending;
    toSend.push(toFormat);
  }
  return toSend;
}
