import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";
import Poster from "../components/Poster";

const API_KEY = `e4584088`;
const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;
const MAX_RESULTS = 6;

function SearchResults() {
  const { keyword } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  async function fetchMovies(keyword) {
    const response = await axios.get(URL + keyword);
    const movies = response.data;
    const firstSix = movies.Search.slice(0, MAX_RESULTS);
    setSearchResults(firstSix);
  }

  useEffect(() => {
    if (keyword !== undefined) {
      fetchMovies(keyword);
    }
  }, [keyword]);

  return (
    <div>
      <SearchBar />
      <>
        {keyword && (
          <div className="search__message">
            Search results for "<span>{keyword}</span>"
          </div>
        )}
      </>
      {!searchResults ? (
        <>LOADING</>
      ) : (
        <section id="movie-display">
          {searchResults.map((movie) => {
            return <Poster movie={movie} keyword={keyword} key={movie.id} />;
          })}
        </section>
      )}
    </div>
  );
}
export default SearchResults;
