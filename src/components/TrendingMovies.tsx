import { useEffect, useState } from 'react';
import { Movie } from '../types';

const TrendingMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_KEY;
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
        );
        const data = await response.json();
        setMovies(data.results.slice(0, 6));
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="w-full aspect-[2/3] bg-gray-800 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group relative aspect-[2/3] rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/70" />
            
            <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <h3 className="text-white font-semibold text-sm text-center truncate">
                {movie.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;