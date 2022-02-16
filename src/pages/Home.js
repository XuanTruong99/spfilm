import React from "react";
import Button from "../components/button/Button";
import HeroSlide from "../components/HeroSlide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";

import { category, moiveType } from "../api/tmdbApi";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <div>
      <HeroSlide />

      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Button
              pathName="/movie"
              buttonSize="btn--small"
              buttonStyle="btn--outline"
              type="btn--outline--primary"
            >
              View more
            </Button>
          </div>
          <MovieList category={category.movie} type={moiveType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Button
              pathName="/movie"
              buttonSize="btn--small"
              buttonStyle="btn--outline"
              type="btn--outline--primary"
            >
              View more
            </Button>
          </div>
          <MovieList category={category.movie} type={moiveType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Button
              pathName="/movie"
              buttonSize="btn--small"
              buttonStyle="btn--outline"
              type="btn--outline--primary"
            >
              View more
            </Button>
          </div>
          <MovieList category={category.tv} type={moiveType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Button
              pathName="/movie"
              buttonSize="btn--small"
              buttonStyle="btn--outline"
              type="btn--outline--primary"
            >
              View more
            </Button>
          </div>
          <MovieList category={category.tv} type={moiveType.top_rated} />
        </div>
      </div>
    </div>
  );
}

export default Home;
