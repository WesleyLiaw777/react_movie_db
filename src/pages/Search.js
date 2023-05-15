import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const API_KEY = `e4584088`;
const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;
const MAX_RESULTS = 6;

function Search() {
  const [keyword, setKeyword] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState(false);

  function onSearch() {
    setSearchResults(true);
    fetchMovies(keyword);
    console.log(keyword);
  }

  function enterKeyword(key) {
    if (key === "Enter") {
      onSearch();
    }
  }

  async function fetchMovies(keyword) {
    const movies = await fetch(URL + keyword);
    const moviesData = await movies.json();
    const firstSix = moviesData.Search.slice(0, MAX_RESULTS);
    setSearchResults(firstSix);
  }

  return (
    <>
      <h1 className="title">Search for a movie here!</h1>
      <div className="sort__search">
        <div className="sort__search--container">
          <input
            type="text"
            value={keyword}
            id="userInput"
            placeholder="Search here.."
            onChange={(event) => setKeyword(event.target.value)}
            onKeyUp={(event) => enterKeyword(event.key)}
          />
          <button id="zoomer-glass" onClick={() => onSearch()}>
            <FaSearch />
          </button>
        </div>
      </div>
      {!search ? (
        <>
          Nothing to see here
        </>
      ) : (
        <section id="movie-display">
          {searchResults.map((movie) => {
            <div>{movie.title}</div>;
          })}
        </section>
      )}
    </>
  );
}
export default Search;
