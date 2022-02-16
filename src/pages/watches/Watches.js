import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import tmdbApi, { category } from "../../api/tmdbApi";
import MovieList from "../../components/movie-list/MovieList";

import { MovieInfo } from "../detail/Detail";

import "./Watches.scss";

function Watches() {
  const { category, id, watch } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItems(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  const IframeRef = useRef();
  return (
    <div className="container">
      <div className="watches">
        <div className="watches__content">
          <div className="watches__content-film">
            <iframe
              ref={IframeRef}
              className="watches__content-iframe"
              src={
                !items.seasons
                  ? `https://www.2embed.ru/embed/tmdb/${category}?id=${id}`
                  : `https://www.2embed.ru/embed/tmdb/${category}?id=${id}&s=${items.seasons[0].season_number}&e=${items.last_episode_to_air.episode_number}`
                // "https://www.youtube.com/embed/WJPSSL2lSjU"
              }
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
          <div className="watches__content-description">
            <MovieInfo item={items} />
          </div>
        </div>
        <div className="watches__list">
          <h1>Similar</h1>
          <MovieList
            category={category}
            id={id}
            type="similar"
            listStyle="watches"
          />
        </div>
      </div>
    </div>
  );
}

export default Watches;
