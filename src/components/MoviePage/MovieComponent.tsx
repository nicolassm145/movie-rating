import { Link } from "react-router-dom";
import { Movie } from "../../types";

const MovieComponent = ({ movie }: { movie: Movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="block bg-base-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-3">
        <h3 className="font-bold truncate">{movie.title}</h3>
        <p className="text-sm text-gray-400">
          {movie.release_date?.split("-")[0]}
        </p>
      </div>
    </Link>
  );
};

export default MovieComponent;
