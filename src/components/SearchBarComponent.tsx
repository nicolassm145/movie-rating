import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  return (
    <div className="flex-auto max-w-2xl mx-8">
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search films, members..."
            className="input input-sm w-full pl-10 bg-opacity-20 bg-gray-500 focus:bg-opacity-30 transition-all border-none rounded-full placeholder:text-gray-400 font-roboto-mono"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
