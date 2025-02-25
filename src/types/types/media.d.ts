export interface Media {
    id: number;
    poster_path: string;
    vote_average?: number;
    media_type?: 'movie' | 'tv';
  }