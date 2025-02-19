import { Movie } from "../../types";

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

export default TMDBRating;