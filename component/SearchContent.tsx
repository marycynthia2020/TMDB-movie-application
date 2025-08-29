"use client";
import MovieCard from "@/component/MovieCard";
import PageTransition from "@/component/PageTransition";
import Spinner from "@/component/Spinner";
import { useGetSearchedMovies } from "@/Hooks/use-getSearchedMovies";
import { movie } from "@/types";
import { useSearchParams } from "next/navigation";;

const SearchContent = () => {
  const searchParam = useSearchParams();
  const query = searchParam.get("q") || "";
  const { data, isLoading, isError } = useGetSearchedMovies(query);
  const movies = data?.results || []

  if (isLoading || isError) {
    return (
      <Spinner />
    );
  }

  return (
      <PageTransition>
      <div className="w-full max-w-[1260px] mx-auto px-4 ">
        <h2 className="text-3xl text-gray-700 dark:text-white mb-10">{movies.length > 0 ? `Result for '${query}'` : `No Result found for '${query}'` }</h2>
        <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie:movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </div>
    </PageTransition>
  );
};

export default SearchContent;
