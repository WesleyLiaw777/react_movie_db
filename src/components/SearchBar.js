import { useState } from "react";
import { FaCircleNotch, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const emptyError = () => {
    alert("Please enter a keyword or phrase.");
  };

  const shortError = () => {
    alert("Keyword must be at least 3 letters.");
  };

  const changePage = () => {
    if (searchTerm) {
      if (searchTerm.length <= 2) {
        shortError();
        return;
      }
      setLoading(true);
      window.setTimeout(() => {
        navigate(`/search/${searchTerm}`);
        setLoading(false);
      }, 1000);
    } else {
      emptyError();
    }
  };

  //Did not make 1 function to handle both keys and clicks, enter requires parameters to be passed in.
  const enterSearchTerm = (key) => {
    key === "Enter" && changePage();
  };
  const clickSearchTerm = () => {
    if (!searchTerm) {
      emptyError();
    }
    searchTerm && changePage();
  };

  return (
    <>
      <div className="title__container">
        <h1 className="title">Search for a movie here!</h1>
      </div>
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
