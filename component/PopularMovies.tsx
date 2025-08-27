"use client";
import { useGetPopularMovies } from "@/Hooks/use-getPopularMovies.query";
import { movie } from "@/types";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const PopularMovies = () => {
  const { data, isLoading, isError } = useGetPopularMovies();
  const [popularMovies, setPopularmovies] = useState([]);

  useEffect(() => {
    if (data) {
      setPopularmovies(data.results);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="w-full max-w-[1260px] mx-auto px-4 text-center">
        loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full max-w-[1260px] mx-auto px-4 text-center">
        There was an error loading movies
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1260px] mx-auto px-4 grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {popularMovies.map((movie: movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default PopularMovies;
