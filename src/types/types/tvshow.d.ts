import { Media } from "./media";
import { Genre } from "./genre";

export interface TVShow extends Media {
  created_by: any;
  name: string;
  backdrop_path: string;
  poster_path: string;
  first_air_date?: string;
  episode_run_time?: number[];
  status?: string;
  overview?: string;
  backdrop_path?: string;
  genres?: Genre[];
  number_of_seasons?: number;
  number_of_episodes?: number;
  tagline?: string;
 
}
