import {FilmIcon, ListBulletIcon, UserIcon, CalendarDaysIcon, BookmarkIcon, Cog6ToothIcon,ArrowRightStartOnRectangleIcon, BoltIcon} from "@heroicons/react/24/outline";
import SearchBarComponent from "./SearchBarComponent";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleSearch = (query: string) => {
    if (query) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };
  return (
    <nav className="bg-transparent px-36">
      <div className="flex items-center py-2">
        <a href="/" className="flex items-center space-x-2">
          <img src="/icon.svg" className="h-12 w-12 " alt="Movie-Rating" />
          <span className="self-center text-2xl font-bold font-roboto-mono-700 text-white">
            Movie-Rating
          </span>
        </a>
        <div className="flex items-center gap-4 ml-auto">
          <div className="flex items-center  font-roboto-mono  ">
            <SearchBarComponent onSearch={handleSearch} />
            <div className="hidden md:flex items-center pl-2">
              <a href="/films">
                <button  className="btn btn-ghost btn-sm gap-2 text-gray-300 hover:text-white">
                  <FilmIcon className="w-5 h-5"  />
                </button>
              </a>
              <a href="/activity">
                <button className="btn btn-ghost btn-sm gap- text-gray-300 hover:text-white">
                    <BoltIcon className="w-5 h-5" />
                </button>
              </a>     
              
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                  <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center p-1">
                    <UserIcon className="w-full h-full text-gray-300" />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-5 shadow menu menu-sm dropdown-content bg-base-100 rounded-[10px]  w-40 border border-neutral " >
                  <li>
                    <a href="/profile" className="flex items-center gap-2 p-2 hover:bg-neutral">
                      <UserIcon className="w-5 h-5 text-gray-300" />
                      <span>Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="/watchlist" className="flex items-center gap-2 p-2 hover:bg-neutral">
                      <BookmarkIcon className="w-5 h-5 text-gray-300" />
                      Watchlist
                    </a>
                  </li>
                  <li>
                    <a href="/list" className="flex items-center gap-2 p-2 hover:bg-neutral">
                      <ListBulletIcon className="w-5 h-5 text-gray-300" />
                      Lists
                    </a>
                  </li>
                  <li>
                    <a href="/diary" className="flex items-center gap-2 p-2 hover:bg-neutral">
                      <CalendarDaysIcon className="w-5 h-5 text-gray-300" />
                      Diary
                    </a>
                  </li>
                  <li>
                    <a href="/setting" className="flex items-center gap-2 p-2 hover:bg-neutral">
                      <Cog6ToothIcon className="w-5 h-5 text-gray-300" />
                      Settings
                    </a>
                  </li>
                  <li className="border-t border-neutral mt-2 pt-2">
                    <a href="/login" className="flex items-center gap-2 p-2 hover:bg-neutral">
                      <ArrowRightStartOnRectangleIcon className="w-5 h-5 text-gray-300" />
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
