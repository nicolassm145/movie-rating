import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsLayout from '../../components/Layout/DetailsLayout';
import MediaSidebar from '../../components/Layout/SidebarLayout';
import { TVShow, Credits } from '../../types';
import SystemLayout from '../../components/Layout/SystemLayout';
import MediaInfo from '../../components/MediaInfoComponent';
import MediaCredits from '../../components/MediaCreditsComponent';

const SeriesDetails = () => {
  const { id } = useParams();
  const [tv, setTv] = useState<TVShow | null>(null);
  const [credits, setCredits] = useState<Credits | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tvResponse = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=credits`
        );
        const tvData = await tvResponse.json();
        setTv(tvData);

        const aggResponse = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=${import.meta.env.VITE_TMDB_KEY}`
        );
        const aggData = await aggResponse.json();

        const mappedCast = aggData.cast.map((castMember: any) => ({
          id: castMember.id,
          credit_id: castMember.roles?.[0]?.credit_id || `${castMember.id}-role`,
          name: castMember.name,
          character: castMember.roles?.[0]?.character || 'N/A',
          profile_path: castMember.profile_path,
        }));

        const mappedCrew = aggData.crew.map((crewMember: any) => ({
          id: crewMember.id,
          credit_id: crewMember.jobs?.[0]?.credit_id || `${crewMember.id}-job`,
          name: crewMember.name,
          job: crewMember.jobs?.[0]?.job || 'N/A',
          profile_path: crewMember.profile_path,
        }));

        const filteredCrew = mappedCrew.filter((member: any) => {
          const jobLower = member.job.toLowerCase();
          return jobLower.includes('director') || jobLower.includes('executive producer');
        });

        setCredits({
          cast: mappedCast,
          crew: filteredCrew,
        });
      } catch (error) {
        console.error('Error fetching TV data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!tv || !credits) {
    return (
      <SystemLayout>
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      </SystemLayout>
    );
  }

  const runtime =
    tv.episode_run_time && tv.episode_run_time.length > 0
      ? `${tv.episode_run_time[0]} min`
      : 'N/A';

  return (
    <SystemLayout>
      <DetailsLayout backdropPath={tv.backdrop_path}>
        <div>
          <MediaSidebar media={tv} credits={credits} mediaType="tv" />
        </div>

        <div>
          <MediaInfo
            title={tv.name}
            year={tv.first_air_date?.split('-')[0]}
            genres={tv.genres}
            runtime={runtime}
            tagline={tv.tagline}
            overview={tv.overview}
            seasonsCount={tv.number_of_seasons}
          />

          <MediaCredits
            cast={credits.cast}
            crew={credits.crew}
          />
        </div>
      </DetailsLayout>
    </SystemLayout>
  );
};

export default SeriesDetails;
