import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Poster from "../components/Poster";
import { useParams } from "react-router-dom";

const API_KEY = `e4584088`;
const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;
const MAX_RESULTS = 6;

function Search() {
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState(false);
  const searchTerm = useParams();
  console.log(`Passed word: ${searchTerm}`)


  function onSearch() {
    setSearch(true);
    fetchMovies(keyword);
    console.log(keyword);
  }

  function enterKeyword(key) {
    if (key === "Enter") {
      onSearch();
    }
  }

  async function fetchMovies(keyword) {
    const response = await axios.get(URL + keyword);
    const movies = response.data;
    const firstSix = movies.Search.slice(0, MAX_RESULTS);
    setSearchResults(firstSix);
    console.log(searchResults);
    setSearch(false);
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
      {!searchResults ? (
        <>LOADING</>
      ) : (
        <section id="movie-display">
          {searchResults.map((movie) => {
            return (
              <Poster movie={movie}/>
            );
          })}
        </section>
      )}
    </>
  );
}
export default Search;
