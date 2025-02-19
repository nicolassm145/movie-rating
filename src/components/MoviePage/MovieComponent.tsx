import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../types";

// Tipos auxiliares para dados retornados pela API
interface AlternativeTitlesResponse {
  titles: Array<{
    iso_3166_1: string;
    title: string;
  }>;
}

interface CreditsResponse {
  crew: Array<{
    job: string;
    name: string;
    id: number;
  }>;
}

const MovieComponent = ({ movie }: { movie: Movie }) => {
  const [alternativeTitles, setAlternativeTitles] = useState<string[]>([]);
  const [directors, setDirectors] = useState<{ name: string; id: number }[]>([]);
  // Estado para controlar se exibe todos os títulos alternativos ou apenas os primeiros
  const [showAllAltTitles, setShowAllAltTitles] = useState(false);

  const year = movie.release_date?.split("-")[0];

  useEffect(() => {
    // 1) Buscar títulos alternativos
    const fetchAlternativeTitles = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/alternative_titles?api_key=${
            import.meta.env.VITE_TMDB_KEY
          }`
        );
        const data = (await res.json()) as AlternativeTitlesResponse;
        const titles = data?.titles?.map((item) => item.title) || [];
        setAlternativeTitles(titles);
      } catch (error) {
        console.error("Erro ao buscar títulos alternativos:", error);
      }
    };

    // 2) Buscar diretores (via créditos)
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
      }
    };

    fetchAlternativeTitles();
    fetchCredits();
  }, [movie.id]);

  return (
    <div className="flex items-start p-4 hover:bg-gray-800 border-b border-gray-700 transition-colors duration-200">
      {/* Poster  */}
      <Link to={`/movie/${movie.id}`} className="block w-24 flex-shrink-0 hover:opacity-75">
        <img
          src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto object-cover rounded"
        />
      </Link>

      {/* Info à direita */}
      <div className="ml-4 flex flex-col justify-center">
        {/* Título e Ano  */}
        <h3 className="text-lg font-semibold text-white leading-tight">
          <Link to={`/movie/${movie.id}`} className="hover:underline">
            {movie.title}
          </Link>{" "}
          {year && (
            <Link to={`/year/${year}`} className="text-gray-400 hover:underline">
              ({year})
            </Link>
          )}
        </h3>

        {/* Títulos alternativos */}
        {alternativeTitles.length > 0 && (
          <p className="text-sm text-gray-400 mt-5">
            <strong>Alternative titles: </strong>
            {showAllAltTitles ? (
              <>
                {alternativeTitles.join(", ")}
                <span
                  className="ml-1 cursor-pointer hover:underline"
                  onClick={() => setShowAllAltTitles(false)}
                >
                  x
                </span>
              </>
            ) : (
              <>
                {alternativeTitles.slice(0, 10).join(", ")}
                {alternativeTitles.length > 10 && (
                  <>
                    {", "}
                    <span
                      className="cursor-pointer hover:underline"
                      onClick={() => setShowAllAltTitles(true)}
                    >
                      ...more
                    </span>
                  </>
                )}
              </>
            )}
          </p>
        )}

        {/* Diretor */}
        {directors.length > 0 && (
          <p className="text-sm text-gray-400 mt-10">
            <strong>Directed by: </strong>
            {directors.map((dir, idx) => (
              <Link
                key={dir.id}
                to={`/director/${dir.id}`}
                className="text-gray-400 hover:underline border-b border-gray-400 mr-1"
              >
                {dir.name}
                {idx < directors.length - 1 && ","}
              </Link>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieComponent;
