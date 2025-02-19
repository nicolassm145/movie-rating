import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Movie, Credits } from "../../types";
import SystemLayout from "../../components/Layout/SystemLayout";
import StarRating from "../../components/MoviePage/StarComponent";
import { MovieSidebar } from "../../components/MoviePage/DetailsComponent";
import { Cast } from "../../components/MoviePage/CastComponent";
import TMDBRating from "../../components/MoviePage/TMDBComponent";

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

  if (!movie || !credits) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <SystemLayout>
      {/* Seção de Backdrop */}
      <div className="relative w-full h-[500px] -mt-16">
        <div className="absolute inset-0">
          <img
            src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-100/70 to-base-100" />
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8">
        {/* Em desktop (md para cima) usamos grid com colunas fixas; em mobile, empilhamos */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_600px_250px] gap-8">
          {/* Coluna 1: Poster, diretor e detalhes */}
          <div>
            <MovieSidebar movie={movie} credits={credits} />
          </div>

          {/* Coluna 2: Título, gêneros, tagline, overview e cast */}
          <div>
            <div className="mb-6">
              <h1 className="text-4xl font-bold">
                {movie.title} ({movie.release_date?.split("-")[0]})
              </h1>
              <div className="flex items-center gap-3 flex-wrap mt-2 text-lg">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="badge badge-outline badge-sm border-gray-400 text-lg"
                  >
                    {genre.name}
                  </span>
                ))}
                <h2 className="text-gray-400">•</h2>
                <h2 className="text-gray-400 font-bold text-xl">
                  {movie.runtime ? formatRuntime(movie.runtime) : "N/A"}
                </h2>
              </div>
            </div>
            {movie.tagline && (
              <p className="text-xl italic font-bold text-gray-400 mb-4">
                {movie.tagline}
              </p>
            )}
            <p className="leading-relaxed text-gray-400 mb-20">
              {movie.overview}
            </p>
            <Cast cast={credits.cast.slice(0, 100)} />
          </div>

          {/* Coluna 3: Avaliação do usuário e nota do TMDB */}
          <div className="flex flex-col gap-6 mt-10 md:mt-20">
            <div className="bg-base-200 p-4 rounded text-center">
              <h2 className="text-2xl font-bold mb-4">Avalie</h2>
              <StarRating rating={rating} setRating={setRating} />
              <p className="mt-4 text-gray-600">Sua avaliação</p>
            </div>
            <div className=" p-4 rounded text-center">
              <TMDBRating movie={movie} />
            </div>
          </div>
        </div>
      </div>
    </SystemLayout>
  );
};

export default MovieDetails;
