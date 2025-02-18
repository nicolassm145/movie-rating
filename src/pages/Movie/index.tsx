import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Movie, Credits } from "../../types";
import SystemLayout from "../../components/Layout/SystemLayout";
import StarRating from "../../components/MoviePage/StarComponent";
import { Cast } from "../../components/MoviePage/CastComponent";
import { MovieSidebar } from "../../components/MoviePage/DetailsComponent";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [credits, setCredits] = useState<Credits | null>(null);
  const [rating, setRating] = useState<number>(0);

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

  if (!movie || !credits)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  const mainCast = credits.cast.slice(0, 5);

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
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar com informações do filme */}
          <MovieSidebar movie={movie} credits={credits} />

          {/* Conteúdo Central */}
          <div className="flex-1 py-5">
            {/* Nova seção de título acima do overview */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">
                {movie.title} ({movie.release_date?.split("-")[0]})
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  {movie.genres?.map((genre) => (
                    <span
                      key={genre.id}
                      className="badge badge-outline badge-sm border-gray-400"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">
                  {movie.runtime ? formatRuntime(movie.runtime) : "N/A"}
                </span>
              </div>
            </div>

            {movie.tagline && (
              <p className="text-xl italic font-bold text-gray-400 mb-4">
                {movie.tagline}
              </p>
            )}

            <div className="mb-20">
              <p className="leading-relaxed text-gray-400">{movie.overview}</p>
            </div>

            <Cast cast={mainCast} />

            {/* Estatísticas Financeiras (mantido caso queira reativar) */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-center">
              {(movie.budget ?? 0) > 0 && (
                <div className="stats bg-base-200 shadow">
                  <div className="stat">
                    <div className="stat-title">Budget</div>
                    <div className="stat-value">
                      ${movie.budget?.toLocaleString()}
                    </div>
                  </div>
                </div>
              )}
              {(movie.revenue ?? 0) > 0 && (
                <div className="stats bg-base-200 shadow">
                  <div className="stat">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">
                      ${movie.revenue?.toLocaleString()}
                    </div>
                  </div>
                </div>
              )}
            </div> */}
          </div>

          {/* Seção de Avaliação */}
          <div className="w-full md:w-1/4 flex flex-col items-center justify-start py-24">
            <h2 className="text-2xl font-bold mb-4">Avalie</h2>
            <StarRating rating={rating} setRating={setRating} />
            <p className="mt-4 text-gray-600">Sua avaliação</p>
          </div>
        </div>
      </div>
    </SystemLayout>
  );
};

export default MovieDetails;