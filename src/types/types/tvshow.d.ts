import { Media } from "./media";
import { Genre } from "./genre";

export interface TVShow extends Media {
  name: string;
  first_air_date?: string;
  overview?: string;
  backdrop_path?: string;
  genres?: Genre[];
}
