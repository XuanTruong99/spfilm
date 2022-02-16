import React from "react";

import { useParams } from "react-router";
import PageHeader from "../components/page-header/PageHeader";
import { category as cate } from "../api/tmdbApi";
import MovieGrid from "../components/movie-grid/MovieGrid";

function Catalog() {
  const { category } = useParams();
  window.addEventListener("fetch", (event) => {
    console.log("page is fully loaded");
  });

  return (
    <div>
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
