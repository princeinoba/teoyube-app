import React from "react";
import { useMediaQuery } from "react-responsive";
import NominationList from "../NominationList";
import NominationToggle from "../NominationToggle";
import Alert from "../Alert";
import { usePending } from "../../utils/PendingContext";
import "./style.css";

function PendingNominations() {
  const isLarge = useMediaQuery({ query: "(min-width: 992px)" });
  const {
    errMessage,
    statusMessage,
    pending,
    setPending,
    removePending,
    setErrMessage,
  } = usePending();

  const error = errMessage ? (
    <Alert
      className={!isLarge ? "mb-0 rounded-0" : ""}
      dismissible={true}
      type="warning"
      onClick={() => setErrMessage("")}
    >
      {errMessage}
    </Alert>
  ) : (
    <></>
  );

  const status = statusMessage ? (
    <Alert className={!isLarge ? "mb-0 rounded-0" : ""} type="success">
      {statusMessage}
    </Alert>
  ) : (
    <></>
  );

  return (
    <section
      className="d-flex flex-column justify-content-end"
      id="nomination-section"
    >
      {status}
      {error}
      <div className="d-flex flex-row">
        <NominationToggle target="nominationList" count={pending.length} />
      </div>
      <div
        className={"collapse " + (isLarge ? "show" : "")}
        id="nominationList"
      >
        <NominationList
          sortable={true}
          className="px-5 px-lg-0 py-3"
          cards={pending}
          setCards={setPending}
          removePending={removePending}
        />
      </div>
    </section>
  );
}

export default PendingNominations;
