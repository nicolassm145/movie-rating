import SystemLayout from "../../components/Layout/SystemLayout";
import TrendingMoviesComponent from "../../components/TrendingMoviesComponent";
import TrendingTVShowsComponent from "../../components/TrendingTvShowsComponent";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('../loginBG.jpg')] absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-100/60 to-base-100" />
      <SystemLayout>
        <div className="relative p-6 px-36 flex justify-between items-center pt-48">
          <TrendingMoviesComponent />
        </div>
        <div className="relative p-6 px-36 flex justify-between items-center ">
          <TrendingTVShowsComponent />
        </div>
        <div className="pt-48"></div>
      </SystemLayout>
    </div>
  );
};

export default HomePage;