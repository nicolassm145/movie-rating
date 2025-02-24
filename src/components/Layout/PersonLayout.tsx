import { MovieCredit } from "../../types";

interface PersonLayoutProps {
  name: string;
  profilePath: string | null;
  birthday?: string;
  deathday?: string;
  placeOfBirth?: string;
  biography?: string;
  credits: MovieCredit[];
  children?: React.ReactNode;
}

const PersonLayout = ({
  name,
  profilePath,
  birthday,
  deathday,
  placeOfBirth,
  biography,
  credits,
  children,
}: PersonLayoutProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-1/4">
          <img
            src={
              profilePath
                ? `https://image.tmdb.org/t/p/w300${profilePath}`
                : "/notFound.jpg"
            }
            alt={name}
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{name}</h1>
          <div className="space-y-2">
            {birthday && (
              <p>
                <span className="font-semibold">Born:</span>{" "}
                {new Date(birthday).toLocaleDateString()}
                {placeOfBirth && ` in ${placeOfBirth}`}
              </p>
            )}
            {deathday && (
              <p>
                <span className="font-semibold">Died:</span>{" "}
                {new Date(deathday).toLocaleDateString()}
              </p>
            )}
          </div>
          
          {biography && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Biography</h2>
              <p className="text-gray-300 leading-relaxed">
                {biography}
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
      
      {children}
    </div>
  );
};

export default PersonLayout;