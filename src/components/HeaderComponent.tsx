import { MagnifyingGlassIcon, FilmIcon, ListBulletIcon, UserIcon, BoltIcon } from '@heroicons/react/24/outline'

const HeaderComponent = () => {
    return (
        <nav className="bg-base-100 border-b border-neutral">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
                <a href="/" className="flex items-center space-x-2">
                    <img
                        src="/icon.svg" 
                        className="h-8 w-8"
                        alt="Movie-Rating"
                    />
                    <span className="self-center text-xl font-bold font-roboto-mono whitespace-nowrap text-white ">
                        Movie-Rating
                    </span>
                </a>

                <div className="flex-auto max-w-2xl mx-8">
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search films, members..."
                            className="input input-sm w-full pl-10 bg-opacity-20 bg-gray-500 focus:bg-opacity-30 transition-all border-none rounded-full placeholder:text-gray-400 font-roboto-mono"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 font-roboto-mono">
                    <div className="hidden md:flex items-center gap-4">
                        <button className="btn btn-ghost btn-sm gap-2 text-gray-300 hover:text-white">
                            <FilmIcon className="w-5 h-5" />
                            <span>Films</span>
                        </button>
                        
                        <button className="btn btn-ghost btn-sm gap-2 text-gray-300 hover:text-white">
                            <ListBulletIcon className="w-5 h-5" />
                            <span>Lists</span>
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
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-neutral">
                                <li>
                                    <a className="hover:bg-neutral/20">
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:bg-neutral/20">
                                        Watchlist
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:bg-neutral/20">
                                        Settings
                                    </a>
                                </li>
                                <li className="border-t border-neutral mt-2 pt-2">
                                    <a className="hover:bg-neutral/20">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
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