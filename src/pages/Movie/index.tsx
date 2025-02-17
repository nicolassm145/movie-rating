import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Movie, Credits } from "../../types"; 
import SystemLayout from "../../components/Layout/SystemLayout";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [credits, setCredits] = useState<Credits | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_TMDB_KEY
          }&append_to_response=credits`
        );
        const movieData = await movieResponse.json();
        setMovie(movieData);
        setCredits(movieData.credits);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const directors = credits?.crew.filter(member => member.job === "Director") || [];
  const mainCast = credits?.cast.slice(0, 10) || []; 

  return (
    <SystemLayout>
      <div className="container mx-auto p-4">
        {/* Banner do filme */}
        <div className="relative mb-8">
          <img
            src={`https://image.tmdb.org/t/p/w1400_and_h450_face${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h1 className="text-4xl font-bold text-white">
              {movie.title} ({movie.release_date?.split("-")[0]})
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Coluna esquerda */}
          <div className="w-full md:w-1/3">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg shadow-lg"
            />
            
            <div className="mt-4 space-y-2">
              <div>
                <span className="font-bold">Director:</span>
                {directors.map(director => (
                  <div key={director.id} className="flex items-center gap-2 mt-1">
                    {director.profile_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${director.profile_path}`}
                        alt={director.name}
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <span>{director.name}</span>
                  </div>
                ))}
                {directors.length === 0 && <span className="text-gray-500">N/A</span>}
              </div>

              <div>
                <span className="font-bold">Runtime:</span>
                <span className="ml-2">
                  {movie.runtime ? formatRuntime(movie.runtime) : 'N/A'}
                </span>
              </div>

              <div>
                <span className="font-bold">Genres:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {movie.genres?.map(genre => (
                    <span 
                      key={genre.id}
                      className="badge badge-outline"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coluna direita */}
          <div className="flex-1">
            {/* Sinopse */}
            {movie.tagline && (
              <p className="text-xl italic text-gray-400 mb-4">"{movie.tagline}"</p>
            )}
            <p className="mb-8">{movie.overview}</p>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Rating</div>
                  <div className="stat-value text-primary">
                    {movie.vote_average?.toFixed(1)}
                  </div>
                  <div className="stat-desc">/10 ({movie.vote_count} votes)</div>
                </div>
              </div>

              {movie.budget > 0 && (
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">Budget</div>
                    <div className="stat-value">
                      ${movie.budget.toLocaleString()}
                    </div>
                  </div>
                </div>
              )}

              {movie.revenue > 0 && (
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">
                      ${movie.revenue.toLocaleString()}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Elenco */}
            <h2 className="text-2xl font-bold mb-4">Top Cast</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {mainCast.map(actor => (
                <div key={actor.id} className="text-center">
                  <img
                    src={
                      actor.profile_path 
                        ? `https://image.tmdb.org/t/p/w276_and_h350_face${actor.profile_path}`
                        : '/avatar-placeholder.png'
                    }
                    alt={actor.name}
                    className="w-full h-48 object-cover rounded-lg mb-2"
                  />
                  <p className="font-bold">{actor.name}</p>
                  <p className="text-sm text-gray-400">{actor.character}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SystemLayout>
  );
};

export default MovieDetails;