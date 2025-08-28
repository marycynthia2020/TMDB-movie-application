import http from "@/services/https";
import { useQuery } from "@tanstack/react-query";

export const useGetTopRatedMovies = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["top rated"],
    queryFn: () => http.httpGetTopRatedMovies(),
  });
  return { data, isLoading, isError };
};
