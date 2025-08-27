import PageTransition from "@/component/PageTransition";
import PopularMovies from "@/component/PopularMovies";
import React from "react";

const TopRatedMovies = () => {
  return (
    <PageTransition>
      <PopularMovies />
    </PageTransition>
  );
};

export default TopRatedMovies;
