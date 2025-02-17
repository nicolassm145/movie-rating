export interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  release_date?: string;
  overview?: string;
  vote_average?: number;
}

export interface MovieSearchResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
