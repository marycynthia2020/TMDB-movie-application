import { Dispatch, SetStateAction } from "react";

export interface ReactChildren {
  children: React.ReactNode;
}

export interface movie {
  title: string,
  overview: string,
  id: number,
  poster_path: string
}

export interface movieCard {
  movie: movie
}

export interface movie_genre {
  id: number,
  name: string
}

export interface movieDetails {
  id: number,
  overview: string,
  genres: movie_genre[],
  poster_path: string,
  release_date: string,
  title: string,
  runtime: number,
  budget: number,
  revenue: number,
  imdb_id: string,
  vote_average: number,
  vote_count: number,
}

export interface movieDetailsCard {
  movie : movieDetails
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: ()=>void
}
