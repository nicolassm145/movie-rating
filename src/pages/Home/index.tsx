import SystemLayout from "../../components/Layout/SystemLayout";
import TrendingMovies from "../../components/TrendingMovies";

const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/loginBG.jpg')] absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-100/60 to-base-100" />
      <SystemLayout>
        <div className="relative p-6 px-36">
          <div className="flex justify-between items-center pt-32">
            <h1 className="font-roboto font-bold text-white text-xl">Trending Movies</h1>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">
              See all &gt;
            </a>
          </div>
          <TrendingMovies />
        </div>
      </SystemLayout>
    </div>
  );
};

export default Home;