import React, { useState, useEffect } from "react";
import NominationList from "../../components/NominationList";
import { getNominations } from "../../utils/API";

function Nominations() {
  const [nominations, setNominations] = useState([]);

  useEffect(() => {
    getNominations().then(response => {
      console.log(response);
      setNominations(response);
    });
  }, []);

  return (
    <>
      <section className="bg-light pt-3 pb-2 mb-4">
        <div className="container-fluid px-lg-5 px-md-3">
          <h1>Nominations</h1>
        </div>
      </section>
      <div className="container-fluid px-lg-5 px-md-3">
        <div className="row mt-3">
          {nominations.map(nomination => (
            <div
              className="col-12 my-3 d-flex flex-column col-md-6 col-xl-4"
              key={nomination._id}
            >
              <div className="card m-2 m-lg-3 flex-grow-1">
                <div className="card-header">
                  {`Submitted on ${new Date(
                    nomination.createdAt
                  ).toDateString()}`}
                </div>
                <div className="card-body">
                  <NominationList
                    className="pl-0 mb-0"
                    cards={
                      nomination.movies.length > 0 ? nomination.movies : []
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Nominations;
