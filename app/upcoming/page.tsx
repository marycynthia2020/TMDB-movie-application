import PageTransition from "@/component/PageTransition";
import UpcomingMovies from "@/component/UpcomingMovies";
import React from "react";

const TopratedMovies = () => {
  return (
    <PageTransition>
      <UpcomingMovies />
    </PageTransition>
  );
};

export default TopratedMovies;
