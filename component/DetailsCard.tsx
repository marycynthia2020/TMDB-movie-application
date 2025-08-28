import { movie_genre, movieDetailsCard } from "@/types";
import { FaStar } from "react-icons/fa";

const DetailsCard = ({ movie}: movieDetailsCard) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="flex flex-col lg:flex-row gap-x-20 items-center  lg:items-start gap-y-10 lg:justify-between">
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt="movie poster"
        className="rounded-md max-w-[384px] max-h-[570px]"
      />
      <div className="flex flex-col gap-y-4 text-lg text-[#374151] dark:text-gray-400">
        <h2 className="font-bold tracking-tight text-2xl text-gray-900 dark:text-white">
          {movie.title}
        </h2>
        <p className="">{movie.overview}</p>
        <ul className="flex gap-4 flex-wrap">
          {movie.genres?.length > 0 &&
            movie.genres.map((genre: movie_genre) => (
              <li
                key={genre.id}
                className="w-fit p-2 border border-gray-300 dark:border-gray-500 rounded-sm"
              >
                {genre.name}
              </li>
            ))}
        </ul>
        <div className="flex gap-2 items-center">
          <FaStar className="text-yellow-400" />
          <p>{movie.vote_average}</p>
          <span className="size-1 rounded-full bg-[#6B7280]"></span>
          <p>{movie.vote_count} reviews</p>
        </div>
        <p><span className="text-[#374151] dark:text-white font-bold">Runtime: </span>{movie.runtime} min.</p>
        <p><span className="text-[#374151] dark:text-white font-bold">Budget: </span>{movie.budget}</p>
        <p><span className="text-[#374151] dark:text-white font-bold">Revenue: </span>{movie.revenue}</p>
        <p><span className="text-[#374151] dark:text-white font-bold">Release Date: </span>{movie.release_date}</p>
        <p><span className="text-[#374151] dark:text-white font-bold">IMDB: </span>{movie.imdb_id}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
