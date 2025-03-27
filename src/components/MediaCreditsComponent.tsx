import React, { useState } from 'react';
import { CastMember, CrewMember } from '../types';
import { Link } from 'react-router-dom';

interface MediaCreditsProps {
  cast: CastMember[];
  crew: CrewMember[];
}

const MediaCredits: React.FC<MediaCreditsProps> = ({ cast, crew }) => {
  const [selectedTab, setSelectedTab] = useState<'cast' | 'crew'>('cast');
  const filteredCrew = crew.filter(
    (member) => member.job === 'Director' || member.job === 'Executive Producer'
  );

  const handleTabChange = (tab: 'cast' | 'crew') => {
    setSelectedTab(tab);
  };

  return (
    <div className="mb-8">

      <div className="flex gap-6 mb-4 border-b border-gray-700">
        <button
          onClick={() => handleTabChange('cast')}
          className={
            selectedTab === 'cast'
              ? 'pb-2 text-teal-400 border-b-2 border-teal-400'
              : 'pb-2 text-gray-400 hover:text-teal-400'
          }
        >
          Cast
        </button>
        <button
          onClick={() => handleTabChange('crew')}
          className={
            selectedTab === 'crew'
              ? 'pb-2 text-teal-400 border-b-2 border-teal-400'
              : 'pb-2 text-gray-400 hover:text-teal-400'
          }
        >
          Crew
        </button>
      </div>

      {selectedTab === 'cast' && cast.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Cast</h2>
          <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-thin">
            {cast.map((actor) => (
              <Link
                key={actor.credit_id}
                to={`/credits/${actor.id}`}
                className="w-32 flex-shrink-0 hover:opacity-80 transition-opacity"
              >
                <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                        : '/notFound.png'
                    }
                    className="w-full h-full object-cover"
                    alt={actor.name}
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="text-sm font-medium">{actor.name}</p>
                  <p className="text-xs text-gray-500">{actor.character}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Se a aba selecionada for "crew", exibe a lista de equipe (filtrada) */}
      {selectedTab === 'crew' && filteredCrew.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Crew</h2>
          <div className="flex overflow-x-auto pb-4 gap-4">
            {filteredCrew.map((member) => (
              <Link
                key={member.credit_id}
                to={`/credits/${member.id}`}
                className="w-32 flex-shrink-0 hover:opacity-80 transition-opacity"
              >
                <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={
                      member.profile_path
                        ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                        : '/notFound.png'
                    }
                    className="w-full h-full object-cover"
                    alt={member.name}
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.job}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaCredits;
