import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({movie}) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"
  return (
    <Link href= {`/movie/${movie.id}`} className="border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-[#1e2936]">
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={`${movie.title} poster`} className="w-full  rounded-t-lg" />
      <div className="px-6 py-8">
        <h2 className="font-bold tracking-tight text-2xl text-gray-900 dark:text-white">{movie.title}</h2>
        <p className="text-[#374151] mt-2 dark:text-gray-400">
          {movie.overview.slice(0, 100)}...
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
