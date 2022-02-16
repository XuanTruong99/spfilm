import React, { useEffect } from "react";

import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./MovieCard.scss";
import { Link, useParams } from "react-router-dom";

function MovieCard(props) {
  const item = props.item;

  const link = "/" + category[props.category] + "/" + item.id;

  const background = apiConfig.w500Image(
    item.poster_path || item.backdrop_path
  );

  return (
    <Link to={link}>
      <div className="movie-wrapper">
        <div
          className="movie-card"
          style={{ backgroundImage: `url(${background})` }}
        >
          <button className="btn">
            <i className="bx bx-play"></i>
          </button>
        </div>
        <h3>{item.title || item.name}</h3>
      </div>
    </Link>
  );
}

export default MovieCard;
