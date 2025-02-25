import { useEffect, useState } from "react";
import { Media, Movie, TVShow } from "../../types";
import { Link } from "react-router-dom";

interface TrendingMediaProps {
  mediaType: 'movie' | 'tv';
  title?: string;
  itemsToShow?: number;
}

const TrendingLayout = ({ mediaType, title, itemsToShow = 6 }: TrendingMediaProps) => {
  const [mediaItems, setMediaItems] = useState<Media[]>([]);

  useEffect(() => {
    const fetchTrendingMedia = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_KEY;
        const response = await fetch(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${apiKey}`);
        const data = await response.json();
        setMediaItems(data.results.slice(0, itemsToShow));
      } catch (error) {
        console.error(`Error fetching trending ${mediaType}:`, error);
      }
    };
    fetchTrendingMedia();
  }, [mediaType, itemsToShow]);

  const getMediaTitle = (item: Media) => {
    return mediaType === 'movie' 
      ? (item as Movie).title 
      : (item as TVShow).name;
  };

  const getMediaLink = (id: number) => {
    return mediaType === 'movie' ? `/movie/${id}` : `/tv/${id}`;
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      {title && <h2 className="text-xl font-bold text-white mb-4 px-4">{title}</h2>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 px-4">
        {mediaItems.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-[2/3] rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            <Link to={getMediaLink(item.id)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={getMediaTitle(item)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/70" />

              <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 items-center justify-center">
                <h3 className="text-white font-semibold text-sm text-center ">
                  {getMediaTitle(item)}
                </h3>
                <p className="text-yellow-400 text-xs text-center mt-1">
                  ⭐ {item.vote_average?.toFixed(1)}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingLayout;