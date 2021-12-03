import React, { useRef } from "react";
import Button from "../Button";
import "./style.css";
import { searchOMDB } from "../../utils/API";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchForm(props) {
  const searchRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const searchTerm = searchRef.current.value.trim();
    if (searchTerm) {
      searchOMDB(searchTerm).then(result => {
        props.setSearch({
          ...result,
          movies: result.movies ? result.movies : [],
          searchTerm,
        });
      });
    } else {
      props.setSearch({
        err: "Please enter a promise title to start your search.",
        searchTerm: "",
      });
    }
    searchRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          ref={searchRef}
          id="movie-search"
          placeholder="Search promise to nominate"
        />
        <div className="input-group-append">
          <Button className="border">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
