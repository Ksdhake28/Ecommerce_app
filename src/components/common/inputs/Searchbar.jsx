import { Search } from "lucide-react";
import { useState } from "react";

function SearchBar({ onSearch }) {
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchInput(term);
        onSearch(term);
    };

    return (
        <div className="m-2 relative flex items-center w-full max-w-lg">
            <input
                type="text"
                placeholder="Search for Product..."
                value={searchInput}
                onChange={handleInputChange}
                className="w-full p-2 pr-10 border border-blue-500 rounded-full focus:border-2 border-blue-500"
            />
            <Search className="absolute right-3" size={20} />
        </div>
    );
}
export default SearchBar;
