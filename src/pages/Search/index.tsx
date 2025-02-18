import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Movie } from "../../types";
import MovieComponent from "../../components/MoviePage/MovieComponent";
import SystemLayout from "../../components/Layout/SystemLayout";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${ import.meta.env.VITE_TMDB_KEY}&query=${query}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Tristeza", error);
      }
    };

    if (query) {
      fetchMovies();
    }
  }, [query]);

  return (
    <SystemLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Results for: {query}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieComponent key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </SystemLayout>
  );
};

export default SearchPage;
