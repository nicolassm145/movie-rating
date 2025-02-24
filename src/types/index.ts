import { ReactNode } from "react";

export interface MediaBase {
  id: number
  poster_path: string
  vote_average?: number
  media_type?: 'movie' | 'tv'
}

export interface Movie extends MediaBase {
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

export interface TVShow extends MediaBase {
  name: string
  first_air_date?: string
  id: number;
  title: string;
  poster_path: string;
  release_date?: string;
  tagline?: string;
  overview?: string;
  vote_average?: number;
  backdrop_path?: string;
}

export type Media = Movie | TVShow

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

export interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}
export interface ActorDetails {
  id: number;
  name: string;
  biography: string;
  birthday: string;
  deathday: string | null;
  place_of_birth: string;
  profile_path: string | null;
}

export interface MovieCredit {
  id: number;
  credit_id: string;
  title: string;
  job?: string;
  character: string;
  poster_path: string | null;
  release_date: string;
  media_type: string;
}