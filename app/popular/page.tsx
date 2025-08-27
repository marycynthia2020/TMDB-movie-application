import PageTransition from "@/component/PageTransition";
import PopularMovies from "@/component/PopularMovies";
import React from "react";

const PopularMoviesPage = () => {
  return (
    <PageTransition>
      <PopularMovies />
    </PageTransition>
  );
};

export default PopularMoviesPage;
