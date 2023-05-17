import { useEffect, useState } from "react";
import { FaCircleNotch, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const errorMessage = () => {
    alert("Please enter a keyword or phrase.");
  };

  const enterSearchTerm = (key) => {
    if (key === "Enter") {
      if (searchTerm) {
        setLoading(true);
        
        window.setTimeout(() => {
          navigate(`/search/${searchTerm}`);
          setLoading(false);
        }, 1000);
      } else {
        errorMessage();
      }
    }
  };

  const clickSearchTerm = () => {
    if (searchTerm) {
      setLoading(true);
      window.setTimeout(() => {
        navigate(`/search/${searchTerm}`);
        setLoading(false);
      }, 1000);
    } else {
      errorMessage();
    }
  };

  return (
    <>
      <h1 className="title">Search for a movie here!</h1>
      <div className="sort__search">
        <input
          type="text"
          value={searchTerm}
          id="userInput"
          placeholder="Search here.."
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyUp={(event) => enterSearchTerm(event.key)}
        />
        {loading ? (
          <>
            <button id="search__button">
              <FaCircleNotch className="search__icon loading__animation" />
            </button>
          </>
        ) : (
          <>
            <button id="search__button" onClick={() => clickSearchTerm()}>
              <FaSearch className="search__icon" />
            </button>
          </>
        )}
      </div>
    </>
  );
}
export default SearchBar;
