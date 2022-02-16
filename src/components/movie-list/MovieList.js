import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import apiConfig from "../../api/apiConfig";

import tmdbApi, { category } from "../../api/tmdbApi";
import MovieCard from "../movie-card/MovieCard";

import "./MovieList.scss";

function MovieList(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};
      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMovieList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
    };
    getList();
  }, []);
  return (
    <div className="movie-list">
      {props.listStyle !== "watches" ? (
        <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <MovieCard item={item} category={props.category} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="movie-list--watches">
          {items.map((item, i) => (
            <MovieCard key={i} item={item} category={props.category} />
          ))}
        </div>
      )}
      {/* <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}

export default MovieList;
