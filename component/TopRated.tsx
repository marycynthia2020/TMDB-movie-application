"use client";
import { movie } from "@/types";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useGetTopRatedMovies } from "@/Hooks/use-getTopRatedMovies";
import Spinner from "./Spinner";

const TopRatedMovies = () => {
  const { data, isLoading, isError } = useGetTopRatedMovies();
  const [topRatedMovies, setTopRatedmovies] = useState<movie[]>([]);

  useEffect(() => {
    if (data) {
      setTopRatedmovies(data?.results);
    }
  }, [data]);

  if (isLoading || isError) {
    return <Spinner />;
  }

  return (
    <div className="w-full max-w-[1260px] mx-auto px-4">
      <h2 className="text-3xl text-gray-700 dark:text-white mb-8 capitalize lg:hidden">
        top Rated movies
      </h2>
      <div className=" grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topRatedMovies?.length > 0 ? (
          topRatedMovies?.map((movie: movie) => (
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

export default TopRatedMovies;
