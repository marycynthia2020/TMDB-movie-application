import { Dispatch, SetStateAction } from "react";

export interface ReactChildren {
  children: React.ReactNode;
}

export interface movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface movie_genre {
  id: number,
  name: string
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: ()=>void
}
