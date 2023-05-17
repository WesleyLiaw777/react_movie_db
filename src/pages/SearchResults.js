import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Poster from "../components/Poster";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const API_KEY = `e4584088`;
const PAGE_SIZE = 10;

function SearchResults() {
  const { keyword } = useParams();
  const prevKeywordRef = useRef("");
  const [allResults, setAllResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayPage, setDisplayPage] = useState(1);
  const [six, setSix] = useState([]);
  const [slice, setSlice] = useState(6);
  const prevSlice = useRef(0);

  //starter value.
  let backendPages = 1;
  const URL = `http://www.omdbapi.com/?s=${keyword}&page=${backendPages}&apikey=${API_KEY}`;

  //dummy initial value.
  let totalBackendPages = 10;

  const showPreviousPage = () => {
    console.log(`previous page called`);
  };

  const showNextPage = () => {
    // setSlice((slice) => (slice*2))
    console.log(`Next page prev slice${prevSlice.current}`);
    console.log(`Next page slice: ${slice}`);
    if (allResults.length < slice) {
      fetchMovies();
      console.log(allResults);
    }
  };

  //removed keyword param, as we no longer append it to URL.
  async function fetchMovies() {
    setLoading(true);

    //Checking if we should start another fetch
    if (backendPages > 1 && backendPages < totalBackendPages) {
      backendPages++;
    }
    if (backendPages === totalBackendPages) {
      alert("No more results");
      return;
    }

    const response = await axios.get(URL);
    const movies = response.data;
    setAllResults((allResults) => allResults.concat(movies.Search));

    //Runs only on first go for new keyword.
    if (backendPages === 1) {
      totalBackendPages = Math.ceil(movies.totalResults / PAGE_SIZE);
    }
    console.log(
      `Pre-update data. prevSlice: ${prevSlice.current}, slice: ${slice}`
    );
    prevSlice.current = slice;
  }

  useEffect(() => {
    console.log(
      `Preslice data. prevSlice: ${prevSlice.current}, slice: ${slice}`
    );
    setSix(allResults.slice(prevSlice, slice));
    //So you can see the skeleton
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [allResults]);

  useEffect(() => {
    //if we have a new keyword, we reset values.
    if (keyword !== undefined && keyword !== prevKeywordRef.current) {
      setAllResults([]);
      prevSlice.current = 0;
      setSlice(6);
      backendPages = 1;
      prevKeywordRef.current = keyword;
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
              {displayPage <= 1 ? (
                <FaChevronLeft className="no_cursor greyed_out" />
              ) : (
                <FaChevronLeft
                  className="cursor hover_effect"
                  onClick={() => showPreviousPage()}
                />
              )}

              {backendPages < totalBackendPages ? (
                <FaChevronRight
                  className="cursor hover_effect"
                  onClick={() => showNextPage()}
                />
              ) : (
                <FaChevronRight className="no_cursor greyed_out" />
              )}
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
      {!six || loading ? (
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
          {six.map((movie) => {
            return <Poster movie={movie} keyword={keyword} key={movie.id} />;
          })}
        </section>
      )}
    </div>
  );
}
export default SearchResults;
