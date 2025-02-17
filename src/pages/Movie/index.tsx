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

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  if (!movie)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  const directors =
    credits?.crew.filter((member) => member.job === "Director") || [];
  const mainCast = credits?.cast.slice(0, 10) || [];

  return (
    <SystemLayout>
      {/* Seção Backdrop */}
      <div className="relative w-full h-[500px] -mt-16">
        <div className="absolute inset-1">
          <img
            src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-100/60 to-base-100" />
        </div>

        {/* Conteúdo sobre o backdrop */}
        <div className="container mx-auto px-6 relative h-full flex items-end pb-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-2 text-white">
              {movie.title} ({movie.release_date?.split("-")[0]})
            </h1>
            <div className="flex items-center gap-4 text-lg text-white/80">
              {movie.genres?.map(genre => (
                <span key={genre.id} className="badge badge-outline badge-sm border-white/30 text-white">
                  {genre.name}
                </span>
              ))}
              <span className="text-white/60">•</span>
              <span className="text-white/80">{movie.runtime ? formatRuntime(movie.runtime) : 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Coluna Esquerda (Poster) */}
          <div className="w-full md:w-1/3">
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-xl shadow-lg"
            />

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Directed by</h3>
                {directors.map((director) => (
                  <div
                    key={director.id}
                    className="flex items-center gap-3 mb-3"
                  >
                    {director.profile_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${director.profile_path}`}
                        alt={director.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <span className="font-medium">{director.name}</span>
                  </div>
                ))}
              </div>

              <div className="divider" />

              <div>
                <h3 className="font-bold text-lg mb-2">Details</h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Status:</span>{" "}
                    {movie.status}
                  </p>
                  <p>
                    <span className="font-semibold">Release Date:</span>{" "}
                    {new Date(movie.release_date).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-semibold">Original Language:</span>{" "}
                    {movie.original_language?.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            {/* Tagline and Overview */}
            {movie.tagline && (
              <p className="text-xl italic text-gray-400 mb-6">
                "{movie.tagline}"
              </p>
            )}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="leading-relaxed">{movie.overview}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="stats bg-base-200 shadow">
                <div className="stat">
                  <div className="stat-title">TMDB Rating</div>
                  <div className="stat-value text-primary">
                    {movie.vote_average?.toFixed(1)}
                  </div>
                  <div className="stat-desc">
                    {movie.vote_count?.toLocaleString()} votes
                  </div>
                </div>
              </div>

              {movie.budget > 0 && (
                <div className="stats bg-base-200 shadow">
                  <div className="stat">
                    <div className="stat-title">Budget</div>
                    <div className="stat-value">
                      ${movie.budget?.toLocaleString()}
                    </div>
                  </div>
                </div>
              )}

              {movie.revenue > 0 && (
                <div className="stats bg-base-200 shadow">
                  <div className="stat">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">
                      ${movie.revenue?.toLocaleString()}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Cast */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Top Cast</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {mainCast.map((actor) => (
                  <div key={actor.id} className="text-center group">
                    <div className="relative overflow-hidden rounded-xl aspect-[2/3]">
                      <img
                        src={
                          actor.profile_path
                            ? `https://image.tmdb.org/t/p/w276_and_h350_face${actor.profile_path}`
                            : "/placeholder-avatar.jpg"
                        }
                        alt={actor.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-2">
                      <p className="font-bold truncate">{actor.name}</p>
                      <p className="text-sm text-gray-400 truncate">
                        {actor.character}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SystemLayout>
  );
};

export default MovieDetails;
