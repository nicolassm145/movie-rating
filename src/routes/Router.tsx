import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import About from "../pages/About";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    { 
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {   
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/about",
        element: <About />
    },
]);

export default router;
