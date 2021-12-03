import React from "react";

function SearchTitle(props) {
  return (
    <>
      {props.totalResults > 0 ? (
        <h2>
          {props.totalResults} results for '{props.searchTerm}':
        </h2>
      ) : (
        ""
      )}
    </>
  );
}

export default SearchTitle;
