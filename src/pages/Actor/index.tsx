// pages/ActorPage.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ActorDetails, MovieCredit } from "../../types";
import SystemLayout from "../../components/Layout/SystemLayout";

const ActorPage = () => {
  const { id } = useParams();
  const [actor, setActor] = useState<ActorDetails | null>(null);
  const [credits, setCredits] = useState<MovieCredit[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Buscar detalhes do ator
        const actorResponse = await fetch(
          `https://api.themoviedb.org/3/person/${id}?api_key=${
            import.meta.env.VITE_TMDB_KEY
          }`
        );
        const actorData = await actorResponse.json();
        
        // Buscar créditos
        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${
            import.meta.env.VITE_TMDB_KEY
          }`
        );
        const creditsData = await creditsResponse.json();
        
        setActor(actorData);
        setCredits(creditsData.cast || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!actor) return <div className="text-center p-8">Loading...</div>;

  return (
    <SystemLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-1/4">
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                  : "/notFound.jpg"
              }
              alt={actor.name}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{actor.name}</h1>
            <div className="space-y-2">
              {actor.birthday && (
                <p>
                  <span className="font-semibold">Born:</span>{" "}
                  {new Date(actor.birthday).toLocaleDateString()}
                  {actor.place_of_birth && ` in ${actor.place_of_birth}`}
                </p>
              )}
              {actor.deathday && (
                <p>
                  <span className="font-semibold">Died:</span>{" "}
                  {new Date(actor.deathday).toLocaleDateString()}
                </p>
              )}
            </div>
            
            {actor.biography && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-3">Biography</h2>
                <p className="text-gray-300 leading-relaxed">
                  {actor.biography}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Filmografia */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Filmography</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {credits.map((credit) => (
              <div key={credit.credit_id} className="group">
                <a 
                  href={`/movie/${credit.id}`}
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-sm">
                    <img
                      src={
                        credit.poster_path
                          ? `https://image.tmdb.org/t/p/w300${credit.poster_path}`
                          : "/notFound.jpg"
                      }
                      alt={credit.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="font-medium text-sm truncate">{credit.title}</p>
                    <p className="text-xs text-gray-400">
                      {credit.character && (
                        <span className="block truncate">{credit.character}</span>
                      )}
                      {credit.release_date && (
                        <span>
                          {new Date(credit.release_date).getFullYear()}
                        </span>
                      )}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SystemLayout>
  );
};

export default ActorPage;