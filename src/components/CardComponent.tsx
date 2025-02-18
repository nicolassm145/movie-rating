import { CastMember } from "../types";

interface CastProps {
  cast: CastMember[];
}

const CastCard = ({ actor }: { actor: CastMember }) => (
  <div className="text-center group">
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
      <p className="text-sm text-gray-400 truncate">{actor.character}</p>
    </div>
  </div>
);

export const Cast = ({ cast }: CastProps) => {
  if (!cast.length) return null;

  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold mb-6">Cast:</h2>
      <div className="grid grid-cols-2 md:grid-cols-8 gap-5">
        {cast.map((actor) => (
          <CastCard key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  );
};