import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";
import Poster from "../components/Poster";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const API_KEY = `e4584088`;
const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;
const MAX_RESULTS = 6;

function SearchResults() {
  const { keyword } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchMovies(keyword) {
    setLoading(true);
    const response = await axios.get(URL + keyword);
    const movies = response.data;
    const firstSix = movies.Search.slice(0, MAX_RESULTS);
    setTimeout(() => {
      setSearchResults(firstSix);
    }, 2000);
    setLoading(false);
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
        {keyword ? (
          <div className="search__message">
            Search results for "<span>{keyword}</span>"
            <div className="page__arrows">
              <FaChevronLeft className="cursor" />
              <FaChevronRight className="cursor" />
            </div>
          </div>
        ) : (
          <figure className="results__background--figure">
            <img
              className="results__background--img"
              src="/poster_collection.jpg"
            />
          </figure>
        )}
      </>
      {!searchResults || loading ? (
        <section id="movie-display">
          {new Array(6).fill(0).map((_, index) => (
            <div className="movie" key={index}>
              <figure className="movie__poster--wrapper skeleton"></figure>
              <div className="movie__info--skeleton">
                <h4 className="movie__title--skeleton skeleton"></h4>
                <h5 className="movie__year--skeleton skeleton"></h5>
              </div>
            </div>
          ))}
        </section>
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
