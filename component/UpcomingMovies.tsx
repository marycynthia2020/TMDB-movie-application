"use client";
import { movie } from "@/types";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useGetUpcomingMovies } from "@/Hooks/use-getUpcomingMovies";
import Spinner from "./Spinner";

const UpcomingMovies = () => {
  const { data, isLoading, isError } = useGetUpcomingMovies();
  const [upcomigMovies, setUpcomingmovies] = useState<movie[]>([]);

  useEffect(() => {
    if (data?.results) {
      setUpcomingmovies(data?.results);
    }
  }, [data?.results]);

  if (isLoading || isError) {
    return <Spinner />;
  }

  return (
    <div className="w-full max-w-[1260px] mx-auto px-4">
      <h2 className="text-3xl text-gray-700 dark:text-white mb-8 capitalize lg:hidden">
        upcoming movies
      </h2>
      <div className=" grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomigMovies?.length > 0 ? (
          upcomigMovies?.map((movie: movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          <div className="text-2xl text-center font-semibold">
            No movie found
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingMovies;
