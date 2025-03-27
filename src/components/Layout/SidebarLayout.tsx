import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { Movie, TVShow, Credits } from '../../types';
import { Link } from 'react-router-dom';

interface MediaSidebarProps {
  media: Movie | TVShow;
  credits: Credits;
  mediaType: 'movie' | 'tv';
}

const MediaSidebar = ({ media, credits, mediaType }: MediaSidebarProps) => {
  const creators =
    mediaType === 'tv'
      ? (media as TVShow).created_by
      : credits.crew.filter((member) => member.job === 'Director');

  return (
    <div className="w-full">
      <img
        src={`https://image.tmdb.org/t/p/original${media.poster_path}`}
        className="w-full rounded-xl shadow-lg"
      />

      <div className="mt-10 space-y-4 mb-10">
        {creators && creators.length > 0 && (
          <div>
            <h3 className="font-bold text-lg mb-2">
              {mediaType === 'movie' ? 'Directed by' : 'Created by'}
            </h3>
            {creators.map((creator: { id: Key | null | undefined; profile_path: any; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
              <div key={creator.id} className="flex items-center gap-3 mb-3">
                {creator.profile_path && (
                  <Link
                    to={
                      mediaType === 'movie'
                        ? `/credits/${creator.id}`
                        : `/credits/${creator.id}`
                    }
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w200${creator.profile_path}`}
                      alt={String(creator.name)}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </Link>
                )}
                <span className="font-medium">{creator.name}</span>
              </div>
            ))}
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
