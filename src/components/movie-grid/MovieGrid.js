import React, { useCallback, useEffect, useState } from "react";

import "./MovieGrid.scss";

import MovieCard from "../movie-card/MovieCard";
import { useParams, useNavigate } from "react-router-dom";
import tmdbApi, { category, moiveType, tvType } from "../../api/tmdbApi";
import Button from "../button/Button";
import Input from "../input/Input";

function MovieGrid(props) {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMovieList(moiveType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);

  const loadMore = async () => {
    let response = null;

    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMovieList(moiveType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
      }
    } else {
      const params = {
        query: keyword,
        page: page + 1,
      };
      response = await tmdbApi.search(props.category, { params });
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };
  return (
    <>
      <div className="section mb-3">
        <MovieSearch category={props.category} keyword={keyword} />
      </div>
      <div className="movie-grid">
        {items.map((item, i) => (
          <MovieCard category={props.category} item={item} key={i} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--small"
            pathName={`/${props.category}`}
            onClick={loadMore}
            type="btn--outline--primary"
          >
            Load more
          </Button>
        </div>
      ) : null}
    </>
  );
}

const MovieSearch = (props) => {
  //   const navigate = useNavigate();

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  // const gotoSearch = useCallback(() => {
  //   if (keyword.trim().length > 0) {
  //     navigate(`/${category[props.category]}/search/${keyword}`);
  //   }
  // }, [keyword, props.category, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      //   if (e.keyCode === 13) {
      //     gotoSearch();
      //   }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword]);

  return (
    <div
      className="movie-search"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button
        pathName={
          keyword
            ? `/${category[props.category]}/search/${keyword}`
            : `/${props.category}`
        }
        buttonSize="btn--small"
        buttonStyle="btn--primary"
      >
        Search
      </Button>
    </div>
  );
};

export default MovieGrid;
