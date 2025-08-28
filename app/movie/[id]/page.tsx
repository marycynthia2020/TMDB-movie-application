"use client";
import DetailsCard from "@/component/DetailsCard";
import Spinner from "@/component/Spinner";
import { useGetMovieDetails } from "@/Hooks/use-getMovieDetails";
import { movieDetails } from "@/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState<movieDetails | null>(null);
  const { id } = useParams();
  const { data, isLoading, isError } = useGetMovieDetails(`${id}`);

  useEffect(() => {
    if (data) {
      setMovie(data);
    }
  }, [data]);

  if (isLoading || isError) {
    return <Spinner />;
  }

  if (!movie) {
    return (
      <div className="w-full max-w-[1260px] mx-auto px-4 text-2xl">
        Movie not found
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1260px] mx-auto px-4 ">
      <DetailsCard movie={movie} />
    </div>
  );
};

export default MovieDetailsPage;
