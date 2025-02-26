import React from 'react';
import { Genre } from '../types';

interface MediaInfoProps {
  title: string;
  year?: string;
  genres?: Genre[];
  runtime?: string;
  tagline?: string;
  overview?: string;
  seasonsCount?: number; 
  rating?: string;      
}

const MediaInfo: React.FC<MediaInfoProps> = ({
  title,
  year,
  genres = [],
  runtime,
  tagline,
  overview,
  seasonsCount,
}) => {
  const infoParts: string[] = [];

  if (year) infoParts.push(year);

  if (seasonsCount && seasonsCount > 0) {
    infoParts.push(
      `${seasonsCount} ${seasonsCount === 1 ? 'season' : 'seasons'}`
    );
  }

  if (runtime && runtime !== 'N/A') {
    infoParts.push(runtime);
  }

  if (genres.length > 0) {
    const joinedGenres = genres.map((g) => g.name).join(', ');
    infoParts.push(joinedGenres);
  }

  return (
    <div>
      <h1 className="text-4xl font-roboto-mono-700 font-bold text-white">
        {title}
      </h1>
      {infoParts.length > 0 && (
        <div className="text-lg font-roboto text-gray-400 mt-2">
          {infoParts.join(' • ')}
        </div>
      )}

      {tagline && (
        <p className="text-xl italic font-roboto font-bold text-white mt-2">
          {tagline}
        </p>
      )}

      <p className="leading-relaxed font-roboto text-white mb-20">
        {overview}
      </p>
    </div>
  );
};

export default MediaInfo;
