import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SearchBarComponent = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  return (
    <div className="relative bg-gray-600 rounded-full w-60">
      <form onSubmit={handleSubmit}>
        <div className="absolute left-3 top-1/2 -translate-y-1/2 ">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-00"/>
        </div>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" className="input input-sm w-full pl-10 bg-opacity-20 bg-gray-800 focus:bg-opacity-70 transition-all border-none rounded-full placeholder:text-gray-400 font-roboto-mono"/>
      </form>
    </div>
  );
};

export default SearchBarComponent;
