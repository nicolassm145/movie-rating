import SystemLayout from "../../components/Layout/SystemLayout";

const AboutPage = () => {
  return (
    <SystemLayout>
      <div className="flex flex-col items-center text-center text-white font-roboto-mono w-full p-6">
        <div className="w-full md:w-2/3 mt-4">
          <h1 className="text-4xl font-bold mb-8">About</h1>         
          <div className="mt-10 text-base">
            <p>
              This application provides comprehensive information about movies, including
              ratings, cast details, and recommendations. All data is powered by
              the TMDB API while maintaining no official association with TMDB.
            </p>

            <div className="mt-8 flex flex-col items-center">
              <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-80 transition-opacity">
                <img src="/tmdbLogo.svg" alt="TMDB Logo" className="h-12 w-48 object-contain"/>
              </a>
              <p className="text-sm text-gray-400 mt-2 font-roboto-mono">
                All data comes from The Movie Database (TMDB)
              </p>
            </div>
          </div>
        </div>
      </div>
    </SystemLayout>
  );
};

export default AboutPage;