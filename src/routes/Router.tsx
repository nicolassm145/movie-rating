import { createBrowserRouter } from "react-router-dom";
import TitleComponent from "../components/TitleComponent";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import About from "../pages/About";
import Profile from "../pages/Profile";
import SearchPage from "../pages/Search";
import MovieDetails from "../pages/Movie";
import ActorPage from "../pages/Actor";
import DirectorPage from "../pages/Director";
import YearPage from "../pages/Year";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <TitleComponent title="Movie-Rating" />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
        <TitleComponent title="Login" />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Register />
        <TitleComponent title="Register" />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Profile />
        <TitleComponent title="Profile" />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <About />
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
