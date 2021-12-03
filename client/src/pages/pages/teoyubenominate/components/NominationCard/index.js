import React from "react";
import Button from "../Button";
import "./style.css";

function NominationCard(props) {
  return (
    <>
      <div
        className={
          "d-flex flex-row card flex-grow-1 nomination-card " +
          (props.draggable ? "draggable" : "")
        }
      >
        <img
          className="card-image nomination-image border-right"
          alt="Full Metal Jacket"
          src={
            props.movie.poster !== "N/A"
              ? props.movie.poster
              : "/top-5-empty.png"
          }
        />
        <div className="card-body p-0 d-flex flex-row justify-content-between">
          <p className="h6 p-3">
            {props.movie.title} ({props.movie.year})
          </p>
          {props.draggable ? (
            <p className="h5 mb-0 d-flex flex-column justify-content-center p-3 border-left grip">
              <i class="fas fa-grip-lines"></i>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      {props.movie.pending ? (
        <Button
          theme="dark"
          className="remove-button"
          onClick={props.removePending}
        >
          <i className="fas fa-times-circle"></i>
        </Button>
      ) : (
        ""
      )}
    </>
  );
}

export default NominationCard;
