import { CastMember } from "../../types";
import { Link } from "react-router-dom";

interface CastProps {
  cast: CastMember[];
}

export const Cast = ({ cast }: CastProps) => {
  if (!cast.length) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Elenco Principal</h2>
      <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-thin">
        {cast.map((actor) => (
          <CastCard key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  );
};

const CastCard = ({ actor }: { actor: CastMember }) => (
  <Link 
    to={`/actor/${actor.id}`}
    className="w-32 flex-shrink-0 hover:opacity-80 transition-opacity"
  >
    <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-sm">
      <img
        src={actor.profile_path 
          ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
          : '/notFound.jpg'}
        className="w-full h-full object-cover"
        alt={actor.name}
      />
    </div>
    <div className="mt-2 text-center">
      <p className="text-sm font-medium truncate">{actor.name}</p>
      <p className="text-xs text-gray-500 truncate">{actor.character}</p>
    </div>
  </Link>
);