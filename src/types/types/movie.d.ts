import { Media } from "./media";
import { Genre } from "./genre";
import { Credits } from "./credits";

export interface Movie extends Media {
  title: string;
  original_language: string;
  status: string;
  vote_count: number;
  release_date?: string;
  tagline?: string;
  overview?: string;
  backdrop_path?: string;
  budget?: number;
  genres?: Genre[];
  revenue?: number;
  runtime?: number;
  credits?: Credits;
}
