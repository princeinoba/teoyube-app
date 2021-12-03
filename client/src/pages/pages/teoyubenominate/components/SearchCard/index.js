import React, { useEffect } from "react";
import Button from "../Button";
import $ from "jquery";
import "./style.css";

function SearchCard(props) {
  useEffect(() => {
    $(".search-button").popover({
      container: "body",
    });
  }, []);

  return (
    <div className="card flex-row my-3">
      <img
        className="card-image border-right"
        alt={props.movie.title}
        src={
          props.movie.poster !== "N/A" ? props.movie.poster : "top-5-empty.png"
        }
      />
      <div className="card-body p-0 d-flex flex-column justify-content-between">
        <p className="h5 p-3">
          {props.movie.title} ({props.movie.year})
        </p>
        <Button
          type="button"
          className="stretched-link py-2 card-button search-button"
          theme={props.movie.pending ? "dark" : "grey"}
          onClick={props.movie.pending ? props.unnominate : props.nominate}
          data-container="body"
          data-trigger="focus"
          data-original-title={
            props.pendingLength >= 5 && !props.movie.pending
              ? "Your nomination list is full!"
              : ""
          }
          data-toggle="popover"
          data-placement="top"
          data-content={
            props.pendingLength >= 5 && !props.movie.pending
              ? "Please remove a movie before adding another."
              : ""
          }
        >
          <i
            className={
              "fas mr-2 " +
              (props.movie.pending ? "fa-times-circle" : "fa-plus-circle")
            }
          ></i>
          {props.movie.pending ? "Remove" : "Nominate"}
        </Button>
      </div>
    </div>
  );
}

export default SearchCard;
