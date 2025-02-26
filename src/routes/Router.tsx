import { createBrowserRouter } from "react-router-dom";
import TitleComponent from "../components/TitleComponent";
import HomePage from "../pages/Home";
import SearchPage from "../pages/Search";
import MovieDetails from "../pages/Movie";
import TvshowDetails from "../pages/Tvshow";
import ActorPage from "../pages/Actor";
import DirectorPage from "../pages/Director";
import YearPage from "../pages/Year";
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";
import ProfilePage from "../pages/Profile";
import AboutPage from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomePage />
        <TitleComponent title="Movie-Rating" />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <LoginPage />
        <TitleComponent title="Login" />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <RegisterPage />
        <TitleComponent title="Register" />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <ProfilePage />
        <TitleComponent title="Profile" />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <AboutPage />
        <TitleComponent title="About" />
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <SearchPage />
        <TitleComponent title="Search" />
      </>
    ),
  },
  {
    path: "/movie/:id",
    element: (
      <>
        <MovieDetails />
        <TitleComponent title="Movie" />
      </>
    ),
  },
  {
    path: "/tv/:id",
    element: (
      <>
        <TvshowDetails />
        <TitleComponent title="TV Show" />
      </>
    ),
  },
  {
    path: "/actor/:id",
    element: (
      <>
        <ActorPage />
        <TitleComponent title="Actor" />
      </>
    ),
  },
  {
    path: "/director/:id",
    element: (  
      <>
        <DirectorPage />
        <TitleComponent title="Director" />
      </>
    ),
  },
  {	
    path: "/year/:year",
    element: (
      <>
        <YearPage />
        <TitleComponent title="Year" />
      </>
    ),
  },
]);

export default router;
