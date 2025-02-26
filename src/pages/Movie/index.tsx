import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie, Credits } from '../../types';
import MediaSidebar from '../../components/Layout/SidebarLayout';
import DetailsLayout from '../../components/Layout/DetailsLayout';
import SystemLayout from '../../components/Layout/SystemLayout';
import MediaInfo from '../../components/MediaInfoComponent';
import MediaCredits from '../../components/MediaCreditsComponent';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [credits, setCredits] = useState<Credits | null>(null);

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_TMDB_KEY
          }&append_to_response=credits`
        );
        const data = await response.json();
        setMovie(data);
        setCredits(data.credits);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    fetchData();
  }, [id]);
  if (!movie || !credits) {
    return (
      <SystemLayout>
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      </SystemLayout>
    );
  }

 
  const runtime = movie.runtime ? formatRuntime(movie.runtime) : 'N/A';

  return (
    <SystemLayout>
      <DetailsLayout backdropPath={movie.backdrop_path || ''}>
        <div>
          <MediaSidebar media={movie} credits={credits} mediaType="movie" />
        </div>

        <div>
        
          <MediaInfo
            title={movie.title}
            year={movie.release_date?.split('-')[0]}
            genres={movie.genres}
            runtime={runtime}
            tagline={movie.tagline}
            overview={movie.overview}
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

export default MovieDetails;
