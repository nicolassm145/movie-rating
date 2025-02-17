import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Movie } from "../../types";
import SystemLayout from "../../components/Layout/SystemLayout";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${ import.meta.env.VITE_TMDB_KEY}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <SystemLayout>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <p className="mb-4">{movie.overview}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Release Date:</p>
                <p>{movie.release_date}</p>
              </div>
              <div>
                <p className="font-bold">Rating:</p>
                <p>{movie.vote_average}/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SystemLayout>
  );
};

export default MovieDetails;
