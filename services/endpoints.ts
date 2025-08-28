// import Search from "@/component/Search";

export default Object.freeze({
    popularMovies: "/movie//popular? ",
    topRatedMovies: "/movie/top_rated?",
    upComingMovies: "/movie/upcoming",
    getMovieById: (movie_id:string)=> `/movie/${movie_id}`,
    SearchMovies: (query:string)=> `/search/movie?query=${query}`
})