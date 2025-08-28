import http from "@/services/https";
import { useQuery } from "@tanstack/react-query";

export const useGetUpcomingMovies = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["top rated"],
    queryFn: () => http.httpGetUpcomingMovies(),
  });
  return { data, isLoading, isError };
};
