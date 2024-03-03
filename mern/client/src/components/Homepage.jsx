import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      // Navigate to /map and pass the search term as state
      window.location.href = `/map?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <div className="flex">
          <input
            type="text"
            placeholder="find food near..."
            className="border border-input h-9 px-3 mr-2 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/createAccount">
          Create Account to provide food
        </NavLink>
      </nav>
    </div>
  );
}
