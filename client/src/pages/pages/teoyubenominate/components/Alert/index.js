import React from "react";

function Alert(props) {
  return (
    <div
      className={
        `alert alert-${props.type} ` +
        (props.dismissible ? "alert-dismissible fade show" : "") +
        " " +
        props.className
      }
      role="alert"
    >
      {props.children}
      {props.dismissible ? (
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={props.onClick}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Alert;
