"use client";
import { useGetPopularMovies } from "@/Hooks/use-getPopularMovies.query";
import { movie } from "@/types";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";

const PopularMovies = () => {
  const { data, isLoading, isError } = useGetPopularMovies();
  const [popularMovies, setPopularmovies] = useState<movie[]>([]);

  useEffect(() => {
    if (data) {
      setPopularmovies(data.results);
    }
  }, [data]);

  if (isLoading || isError) {
    return <Spinner />;
  }

  return (
    <div className="w-full max-w-[1260px] mx-auto px-4 ">
      <h2 className="text-3xl text-gray-700 dark:text-white mb-8 capitalize">
        popular movies
      </h2>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularMovies.length > 0 ? (
          popularMovies.map((movie: movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          <div className="text-2xl text-center font-semibold">No movie found</div>
        )}
      </div>
    </div>
  );
};

export default PopularMovies;
