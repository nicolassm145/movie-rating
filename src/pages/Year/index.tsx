// pages/YearPage.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Movie } from "../types";
import MovieComponent from "../../components/MoviePage/MovieComponent";
import SystemLayout from "../../components/Layout/SystemLayout";

const YearPage = () => {
  const { year } = useParams<{ year: string }>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMoviesByYear = async () => {
      try {
        setLoading(true);
        setError("");
        
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_KEY
          }&sort_by=popularity.desc&primary_release_year=${year}&page=${currentPage}`
        );
        
        if (!response.ok) throw new Error("Failed to fetch movies");
        
        const data = await response.json();
        setTotalPages(data.total_pages);
        
        if (currentPage === 1) {
          setMovies(data.results);
        } else {
          setMovies(prev => [...prev, ...data.results]);
        }
      } catch (err) {
        setError("Error loading movies. Please try again later.");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (year && parseInt(year) > 1874) { // Primeiro filme foi em 1878
      fetchMoviesByYear();
    }
  }, [year, currentPage]);

  const handleShowMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  if (!year || isNaN(parseInt(year))) {
    return (
      <SystemLayout>
        <div className="text-center p-8 text-red-500">
          Invalid year specified
        </div>
      </SystemLayout>
    );
  }

  return (
    <SystemLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Movies from {year}
        </h1>

        {error && (
          <div className="text-center text-red-500 mb-4">{error}</div>
        )}

        <div className="space-y-4">
          {movies.map((movie) => (
            <MovieComponent key={movie.id} movie={movie} />
          ))}
        </div>

        {loading && (
          <div className="text-center p-8 text-gray-400">Loading...</div>
        )}

        {!loading && currentPage < totalPages && movies.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={handleShowMore}
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
              disabled={loading}
            >
              Show More
            </button>
          </div>
        )}

        {!loading && movies.length === 0 && !error && (
          <div className="text-center p-8 text-gray-400">
            No movies found for this year
          </div>
        )}
      </div>
    </SystemLayout>
  );
};

export default YearPage;