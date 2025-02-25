import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ActorDetails, MovieCredit } from "../../types";
import SystemLayout from "../../components/Layout/SystemLayout";
import PersonLayout from "../../components/Layout/PersonLayout";

const DirectorPage = () => {
  const { id } = useParams();
  const [director, setDirector] = useState<ActorDetails | null>(null);
  const [credits, setCredits] = useState<MovieCredit[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [directorRes, creditsRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`),
          fetch(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${import.meta.env.VITE_TMDB_KEY}`)
        ]);
        
        const [directorData, creditsData] = await Promise.all([
          directorRes.json(),
          creditsRes.json()
        ]);
        const directingCredits = creditsData.crew.filter(
          (credit: MovieCredit) => credit.job === "Director"
        );

        setDirector(directorData);
        setCredits(directingCredits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!director) return <div className="text-center p-8">Loading...</div>;

  return (
    <SystemLayout>
      <PersonLayout
        name={director.name}
        profilePath={director.profile_path}
        birthday={director.birthday}
        deathday={director.deathday ?? undefined}
        placeOfBirth={director.place_of_birth}
        biography={director.biography}
        credits={credits}
      />
    </SystemLayout>
  );
};

export default DirectorPage;