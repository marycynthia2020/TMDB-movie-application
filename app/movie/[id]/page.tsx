"use client";
import DetailsCard from "@/component/DetailsCard";
import { useGetMovieDetails } from "@/Hooks/use-getMovieDetails";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const { data, isLoading, isError } = useGetMovieDetails(`${id}`);

  useEffect(() => {
    if (data) {
        console.log(data)
      setMovie(data);
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
  return <div className="w-full max-w-[1260px] mx-auto px-4 " >
    <DetailsCard movie={movie} />
  </div>;
};

export default MovieDetailsPage;
