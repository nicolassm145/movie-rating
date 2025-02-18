import { ReactNode } from "react";

export interface Movie {
  original_language: any;
  status: ReactNode;
  vote_count: any;
  id: number;
  title: string;
  poster_path: string;
  release_date?: string;
  tagline?: string;
  overview?: string;
  vote_average?: number;
  backdrop_path?: string;
  budget?: number;
  genres?: Genre[];
  revenue?: number;
  runtime?: number;
  credits?: Credits;
}

export interface Credits {
  cast: CastMember[];
  crew: CrewMember[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path?: string;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
  profile_path?: string;
}

export interface MovieSearchResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
