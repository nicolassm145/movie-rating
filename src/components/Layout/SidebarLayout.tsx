import { Movie, TVShow, Credits } from '../../types';

interface MediaSidebarProps {
  media: Movie | TVShow;
  credits: Credits;
  mediaType: 'movie' | 'tv';
}

const MediaSidebar = ({ media, credits, mediaType }: MediaSidebarProps) => {
  const creators = mediaType === 'tv' 
    ? credits.crew.filter((member) => member.job === 'Creator') 
    : credits.crew.filter((member) => member.job === 'Director');

  return (
    <div className="w-full">
      <img
        src={`https://image.tmdb.org/t/p/original${media.poster_path}`}
        className="w-full rounded-xl shadow-lg"
      />

      <div className="mt-10 space-y-4 mb-10">
        {creators.length > 0 && (
          <div>
            <h3 className="font-bold text-lg mb-2">
              {mediaType === 'movie' ? 'Directed by' : 'Created by'}
            </h3>
          </div>
        )}

        <div className="divider" />

        <div>
          <h3 className="font-bold text-lg mb-2">Details</h3>
          <div className="space-y-2">
            {mediaType === 'movie' ? (
              <>
                <p>Status: {(media as Movie).status}</p>
                <p>Release Date: {(media as Movie).release_date}</p>
              </>
            ) : (
              <>
                <p>First Air Date: {(media as TVShow).first_air_date}</p>
                <p>Seasons: {(media as TVShow).number_of_seasons}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MediaSidebar;