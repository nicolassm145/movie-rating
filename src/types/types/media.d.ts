export interface Media {
    id: number;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    vote_average?: number;
    genre: Genre[];
    media_type?: 'movie' | 'tv';
  }