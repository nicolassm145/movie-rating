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
        <TitleComponent title="Movie Details" />
      </>
    ),
  },
  {
    path: "/actor/:id",
    element: (
      <>
        <ActorPage />
        <TitleComponent title="Actor Details" />
      </>
    ),
  }
]);

export default router;
