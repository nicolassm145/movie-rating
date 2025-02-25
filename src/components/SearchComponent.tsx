import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "../types";

interface CreditsResponse {
  crew: Array<{
    job: string;
    name: string;
    id: number;
  }>;
}

const SearchComponent = ({ movie }: { movie: Movie }) => {
  const [directors, setDirectors] = useState<{ name: string; id: number }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const year = movie.release_date?.split("-")[0];

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${
            import.meta.env.VITE_TMDB_KEY
          }`
        );
        const data = (await res.json()) as CreditsResponse;
        const directorsFound = data.crew
          .filter((person) => person.job === "Director")
          .map((director) => ({ name: director.name, id: director.id }));
        setDirectors(directorsFound);
      } catch (error) {
        console.error("Erro ao buscar diretores:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCredits();
  }, [movie.id]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex items-start p-4 px-36 hover:bg-gray-800 ">
      {/* Poster */}
      <Link to={`/movie/${movie.id}`} className="block w-24 flex-shrink-0 hover:opacity-75">
        <img
          src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto object-cover rounded"
        />
      </Link>

      {/* Informações à direita */}
      <div className="ml-4 flex flex-col justify-center">
        {/* Título e Ano */}
        <h3 className="text-lg font-semibold text-white leading-tight">
          <Link to={`/movie/${movie.id}`} className="hover:text-white">
            {movie.title}
          </Link>{" "}
          {year && (
            <Link to={`/year/${year}`} className="text-gray-400 hover:text-white">
              ({year})
            </Link>
          )}
        </h3>

        {/* Diretor */}
        {directors.length > 0 && (
          <p className="text-sm text-gray-400 mt-2">
            <strong>Diretor{directors.length > 1 ? "es" : ""}: </strong>
            {directors.map((dir, idx) => (
              <span key={dir.id}>
                <Link
                  to={`/director/${dir.id}`}
                  className="text-gray-400 hover:text-white border-b border-gray-400 mr-1"
                >
                  {dir.name}
                </Link>
                {idx < directors.length - 1 && ", "}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
