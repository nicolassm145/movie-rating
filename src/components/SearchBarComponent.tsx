import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  return (
    <div className="flex items-center">
      {!open ? (
        <button onClick={() => setOpen(true)} className="p-2 rounded-full transition-colors btn btn-ghost btn-circle">
          <MagnifyingGlassIcon className="w-5 h-5 text-white" />
        </button>
      ) : (
      <div className="relative bg-gray-600 rounded-full h-8 w-60 ">
        <form onSubmit={handleSubmit} className="flex items-center h-full">
          
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="input input-sm flex-grow bg-opacity-20 bg-gray-700 focus:bg-opacity-70 transition-all border-none rounded-full placeholder:text-gray-400 font-roboto-mono  h-full pr-8"
          />
        </form>
        <button onClick={() => setOpen(false)} 
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white z-10"
        >
          x
        </button>
      </div>
      )}
    </div>
  );
};

export default SearchBar;
