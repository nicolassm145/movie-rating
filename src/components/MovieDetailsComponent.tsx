import { Movie, Credits } from "../types";

interface MovieSidebarProps {
  movie: Movie;
  credits: Credits;
}

const MovieDetailsComponent: React.FC<MovieSidebarProps> = ({ movie, credits }) => {
  const directors = credits.crew.filter((member) => member.job === "Director");

  return (
    <div className="w-full">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        className="w-full rounded-xl shadow-lg"
      />

      <div className="mt-10 space-y-4 mb-10">
        {directors.length > 0 && (
          <div>
            <h3 className="font-bold text-lg mb-2">Directed by</h3>
            {directors.map((director) => (
              <div key={director.id} className="flex items-center gap-3 mb-3">
                {director.profile_path && (
                  <a href={`/director/${director.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${director.profile_path}`}
                      alt={director.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </a>
                )}
                <span className="font-medium">{director.name}</span>
              </div>
            ))}
          </div>
        )}

        <div className="divider" />

        <div>
          <h3 className="font-bold text-lg mb-2">Details</h3>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Status:</span> {movie.status}
            </p>
            <p>
              <span className="font-semibold">Release Date:</span>{" "}
              {movie.release_date
                ? new Date(movie.release_date).toLocaleDateString()
                : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Original Language:</span>{" "}
              {movie.original_language?.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsComponent;
