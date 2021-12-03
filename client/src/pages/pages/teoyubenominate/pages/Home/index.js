import React from "react";
import { useMediaQuery } from "react-responsive";
import SearchMovies from "../../components/SearchMovies";
import PendingNominations from "../../components/PendingNominations";

function Home() {
  const isLarge = useMediaQuery({ query: "(min-width: 992px)" });
  return (
    <>
      <section className="bg-light pt-3 pb-2">
        <div className="container-fluid px-lg-5 px-md-3">
          <h1>What are your top 5 promises?</h1>
        </div>
      </section>
      <section className="container-fluid p-0 flex-grow-1 d-flex flex-column flex-lg-row">
        <div className="container-fluid px-lg-5 px-md-3">
          <SearchMovies />
        </div>
        <div
          className={
            "container-fluid p-0 my-3 px-lg-5 " + (isLarge ? "border-left" : "")
          }
        >
          <PendingNominations />
        </div>
      </section>
    </>
  );
}

export default Home;
