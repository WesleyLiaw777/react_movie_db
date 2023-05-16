import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  function enterSearchTerm(key) {
    if (key === "Enter") {
      navigate(`/search/${searchTerm}`);
    }
  }

  return (
    <>
      <h1 className="title">Search for a movie here!</h1>
      <div className="sort__search">
        <div className="sort__search--container">
          <input
            type="text"
            value={searchTerm}
            id="userInput"
            placeholder="Search here.."
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyUp={(event) => enterSearchTerm(event.key)}
          />
          <button
            id="zoomer-glass"
            onClick={() => navigate(`/search/${searchTerm}`)}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  );
}
export default SearchBar;
