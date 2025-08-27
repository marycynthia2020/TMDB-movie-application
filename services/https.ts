import axios from "axios";
import endpoints from "./endpoints";

const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    // "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
  },
});

class BaseURL {
  httpGetPopularMovies = async () => {
    try {
      const response = await AxiosInstance.get(endpoints.popularMovies);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "movies not found");
    }
  };

  httpGetMovieById = async (movieId: string) => {
    try {
      const response = await AxiosInstance.get(endpoints.getMovieById(movieId));
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "movies not found");
    }
  };

  httpGetSearchedMovies = async(queryParam:string)=>{
     try {
      const response = await AxiosInstance.get(endpoints.SearchMovies(queryParam));
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "movies not found");
    }
}

}


const http = new BaseURL();
export default http;
