import React, { useState } from "react";
import Alert from "../Alert";
import SearchTitle from "../SearchTitle";
import SearchCard from "../SearchCard";
import SearchForm from "../SearchForm";
import { usePending } from "../../utils/PendingContext";

function SearchMovies() {
  const {
    pending,
    addPending,
    removePending,
    markPendingOnSearch,
  } = usePending();
  const [search, setSearch] = useState({
    movies: [],
    totalResults: 0,
    searchTerm: "",
  });

  const setNominate = (imdbID, nominateBool) => {
    const changedMovies = search.movies.map(movie => {
      if (movie.imdbID === imdbID) {
        nominateBool ? addPending(movie) : removePending(imdbID);
        movie.pending = nominateBool;
      }
      return movie;
    });
    setSearch({ ...search, movies: changedMovies });
  };

  return (
    <div className="row">
      <div className="col">
        <div className="row mt-4">
          <div className="col">
            <SearchForm setSearch={setSearch} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            {search.err ? (
              <Alert type="warning">{search.err}</Alert>
            ) : (
              <SearchTitle
                totalResults={search.totalResults}
                searchTerm={search.searchTerm}
              />
            )}
          </div>
        </div>
        <div className="row mb-5">
          {search.movies
            ? search.movies.map(movie => {
                const markedMovie = markPendingOnSearch(movie);
                return (
                  <div className="col-6 d-flex" key={markedMovie.imdbID}>
                    <SearchCard
                      pendingLength={pending.length}
                      movie={markedMovie}
                      nominate={() => setNominate(markedMovie.imdbID, true)}
                      unnominate={() => setNominate(markedMovie.imdbID, false)}
                    />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default SearchMovies;
