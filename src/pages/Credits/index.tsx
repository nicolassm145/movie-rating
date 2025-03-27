import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SystemLayout from "../../components/Layout/SystemLayout";
import { PersonDetails, MovieCredit, PersonCombinedCredits } from "../../types";

const CreditsPage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState<PersonDetails | null>(null);
  const [combinedCredits, setCombinedCredits] = useState<PersonCombinedCredits | null>(null);
  const [activeTab, setActiveTab] = useState<"cast" | "crew">("cast");
  const [activeMediaType, setActiveMediaType] = useState<"movie" | "tv">("movie");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [personRes, creditsRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`),
          fetch(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${import.meta.env.VITE_TMDB_KEY}`)
        ]);
        const personData = await personRes.json();
        const creditsData = await creditsRes.json();
        setPerson(personData);
        setCombinedCredits(creditsData);
      } catch (error) {
        console.error("Error fetching person details or credits:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!person || !combinedCredits) {
    return (
      <SystemLayout>
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      </SystemLayout>
    );
  }

  const filteredCast = combinedCredits.cast.filter(
    (credit) => credit.media_type === activeMediaType
  );
  const filteredCrew = combinedCredits.crew.filter(
    (credit) => credit.media_type === activeMediaType
  );

  const groupedCrew = filteredCrew.reduce((acc: { [job: string]: MovieCredit[] }, credit: MovieCredit) => {
    if (!acc[credit.job]) {
      acc[credit.job] = [];
    }
    acc[credit.job].push(credit);
    return acc;
  }, {});

  return (
    <SystemLayout>
      <div className="container mx-auto px-36 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <img
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w300${person.profile_path}`
                  : "/notFound.jpg"
              }
              alt={person.name}
              className="rounded-lg shadow-lg w-full"
            />
            <h1 className="text-3xl font-bold mt-4">{person.name}</h1>
            <div className="mt-4 space-y-2">
              {person.birthday && (
                <p>
                  <span className="font-semibold">Born:</span>{" "}
                  {new Date(person.birthday).toLocaleDateString()}
                  {person.place_of_birth && ` in ${person.place_of_birth}`}
                </p>
              )}
              {person.deathday && (
                <p>
                  <span className="font-semibold">Died:</span>{" "}
                  {new Date(person.deathday).toLocaleDateString()}
                </p>
              )}
            </div>
            {person.biography && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-3">Biography</h2>
                <p className="text-gray-300 leading-relaxed">{person.biography}</p>
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="mb-6">
              <button
                onClick={() => setActiveMediaType("movie")}
                className={`mr-4 px-4 py-2 ${
                  activeMediaType === "movie" ? "font-bold border-b-2 border-blue-500" : ""
                }`}
              >
                Filmes
              </button>
              <button
                onClick={() => setActiveMediaType("tv")}
                className={`px-4 py-2 ${
                  activeMediaType === "tv" ? "font-bold border-b-2 border-blue-500" : ""
                }`}
              >
                Séries
              </button>
            </div>
            <div className="mb-6">
              <button
                onClick={() => setActiveTab("cast")}
                className={`mr-4 px-4 py-2 ${
                  activeTab === "cast" ? "font-bold border-b-2 border-blue-500" : ""
                }`}
              >
                Cast
              </button>
              <button
                onClick={() => setActiveTab("crew")}
                className={`px-4 py-2 ${
                  activeTab === "crew" ? "font-bold border-b-2 border-blue-500" : ""
                }`}
              >
                Crew
              </button>
            </div>
            {activeTab === "cast" && (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {filteredCast.map((credit) => (
                  <div key={credit.credit_id || credit.id} className="group">
                    <Link
                      to={
                        credit.media_type === "movie"
                          ? `/movie/${credit.id}`
                          : `/tv/${credit.id}`
                      }
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-sm">
                        <img
                          src={
                            credit.poster_path
                              ? `https://image.tmdb.org/t/p/w300${credit.poster_path}`
                              : "/notFound.jpg"
                          }
                          alt={credit.title || credit.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-2">
                        <p className="font-medium text-sm truncate">
                          {credit.title || credit.name}
                        </p>
                        {credit.character && (
                          <p className="text-xs text-gray-400 truncate">
                            {credit.character}
                          </p>
                        )}
                        {credit.release_date && (
                          <p className="text-xs text-gray-400">
                            {new Date(credit.release_date).getFullYear()}
                          </p>
                        )}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "crew" && (
              <div>
                {Object.keys(groupedCrew).map((job) => (
                  <div key={job} className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">{job}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {groupedCrew[job].map((credit: { credit_id: any; id: any; media_type: string; poster_path: any; title: any; name: any; release_date: string | number | Date; }) => (
                        <div key={credit.credit_id || credit.id} className="group">
                          <Link
                            to={
                              credit.media_type === "movie"
                                ? `/movie/${credit.id}`
                                : `/tv/${credit.id}`
                            }
                            className="block hover:opacity-80 transition-opacity"
                          >
                            <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-sm">
                              <img
                                src={
                                  credit.poster_path
                                    ? `https://image.tmdb.org/t/p/w300${credit.poster_path}`
                                    : "/notFound.jpg"
                                }
                                alt={credit.title || credit.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="mt-2">
                              <p className="font-medium text-sm truncate">
                                {credit.title || credit.name}
                              </p>
                              {credit.release_date && (
                                <p className="text-xs text-gray-400">
                                  {new Date(credit.release_date).getFullYear()}
                                </p>
                              )}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </SystemLayout>
  );
};

export default CreditsPage;
