import React from "react";
import { ReactSortable } from "react-sortablejs";
import NominationCard from "../NominationCard";
import "./style.css";

function NominationList(props) {
  const sortableList = (
    <ReactSortable
      tag="ol"
      animation={200}
      className={"nominations " + props.className}
      list={props.cards}
      setList={props.setCards}
    >
      {props.cards.map(card => (
        <li key={card.imdbID} className="d-flex flex-row mb-3">
          <NominationCard
            draggable={true}
            movie={card}
            removePending={() => props.removePending(card.imdbID)}
          />
        </li>
      ))}
    </ReactSortable>
  );

  const nonSortableList = (
    <ol className={"nominations " + props.className}>
      {props.cards.map(card => (
        <li key={card.imdbID} className="d-flex flex-row mb-3">
          <NominationCard movie={card} />
        </li>
      ))}
    </ol>
  );

  return props.sortable ? sortableList : nonSortableList;
}

export default NominationList;
