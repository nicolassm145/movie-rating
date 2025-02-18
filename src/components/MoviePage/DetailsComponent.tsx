// components/MovieSidebar.tsx
import { Movie, Credits } from "../../types";

interface MovieSidebarProps {
  movie: Movie;
  credits: Credits;
}

const DirectedBy = ({ credits }: { credits: Credits }) => {
  const directors = credits.crew.filter((member) => member.job === "Director");

  if (!directors.length) return null;

  return (
    <div>
      <h3 className="font-bold text-lg mb-2">Directed by</h3>
      {directors.map((director) => (
        <div key={director.id} className="flex items-center gap-3 mb-3">
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
  );
};

const MovieDetails = ({ movie }: { movie: Movie }) => (
  <div>
    <h3 className="font-bold text-lg mb-2">Details</h3>
    <div className="space-y-2">
      <p><span className="font-semibold">Status:</span> {movie.status}</p>
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
);

const TMDBRating = ({ movie }: { movie: Movie }) => (
  <div className="stats bg-base-200 shadow text-center">
    <div className="stat">
      <div className="stat-title font-bold">TMDB Rating</div>
      <div className="stat-value text-primary">
        {movie.vote_average?.toFixed(2)}
      </div>
      <div className="stat-desc text-sm text-gray-400">
        {movie.vote_count?.toLocaleString()} votes
      </div>
    </div>
  </div>
);

export const MovieSidebar = ({ movie, credits }: MovieSidebarProps) => (
  <div className="w-full md:w-1/4">
    <img
      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      alt={movie.title}
      className="w-full rounded-xl shadow-lg"
    />
    
    <div className="mt-10 space-y-4">
      <DirectedBy credits={credits} />
      
      <div className="divider" />
      
      <MovieDetails movie={movie} />
      
      <div className="divider" />
      
      <TMDBRating movie={movie} />
    </div>
  </div>
);