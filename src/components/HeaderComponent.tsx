import {FilmIcon, ListBulletIcon, UserIcon, BoltIcon, CalendarDaysIcon, BookmarkIcon, Cog6ToothIcon, ArrowRightStartOnRectangleIcon} from "@heroicons/react/24/outline";
import SearchBarComponent from "./SearchBarComponent";
import { useNavigate } from "react-router-dom";


const HeaderComponent = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log('Search term:', query);
    if (query) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <nav className="bg-transparent focus:bg-opacity-20 backdrop-blur-sm">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-10 py-1">
        <a href="/" className="flex items-center space-x-2">
          <img src="/icon.svg" className="h-10 w-10 " alt="Movie-Rating" />
          <span className="self-center text-xl font-bold font-roboto-mono whitespace-nowrap text-white ">
            Movie-Rating
          </span>
        </a>

        <SearchBarComponent onSearch={handleSearch} />
        
        <div className="flex items-center gap-4 font-roboto-mono ">
          <div className="hidden md:flex items-center gap-4">
            <button className="btn btn-ghost btn-sm gap-2 text-gray-300 hover:text-white">
              <FilmIcon className="w-5 h-5" />
              <span>Films</span>
            </button>

            
            <button className="btn btn-ghost btn-sm gap-2 text-gray-300 hover:text-white">
              <BoltIcon className="w-5 h-5" />
              <span>Activity</span>
            </button>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center p-1.5">
                  <UserIcon className="w-full h-full text-gray-300" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-5 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-neutral"
              >
                <li>
                  <a
                    href="/profile"
                    className="flex items-center gap-2 p-2 hover:bg-neutral/20"
                  >
                    <UserIcon className="w-5 h-5 text-gray-300" />
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 p-2 hover:bg-neutral/20"
                  >
                    <BookmarkIcon className="w-5 h-5 text-gray-300" />
                    Watchlist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 p-2 hover:bg-neutral/20"
                  >
                    <ListBulletIcon className="w-5 h-5 text-gray-300" />
                    Lists
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 p-2 hover:bg-neutral/20"
                  >
                    <CalendarDaysIcon className="w-5 h-5 text-gray-300" />
                    Diary
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 p-2 hover:bg-neutral/20"
                  >
                    <Cog6ToothIcon className="w-5 h-5 text-gray-300" />
                    Settings
                  </a>
                </li>
                <li className="border-t border-neutral mt-2 pt-2">
                  <a
                    href="#"
                    className="flex items-center gap-2 p-2 hover:bg-neutral/20"
                  >
                    <ArrowRightStartOnRectangleIcon className="w-5 h-5 text-gray-300" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Ainda n funfa */}
          <button className="md:hidden btn btn-ghost btn-circle">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
