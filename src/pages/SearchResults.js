import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Poster from "../components/Poster";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const API_KEY = `e4584088`;
const PAGE_SIZE = 10;
const INIT_MAX_RESULTS = 6;
let backendPages = 1;

function SearchResults() {
  const { keyword } = useParams();
  const prevKeywordRef = useRef("");
  const [allResults, setAllResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayPage, setDisplayPage] = useState(1);
  const [six, setSix] = useState([]);
  const [slices, setSlices] = useState([0, 6]);
  let slice = 6;
  let prevSlice = 0;
  //Have to update hooks (slice, prevSlice) before code. Code will now only run once they update.
  //Had some issue before using hooks. Probably completely doable without them.
  const [showMore, setShowMore] = useState(false);

  //initial value, fetches first page.
  let URL = `http://www.omdbapi.com/?s=${keyword}&page=${backendPages}&apikey=${API_KEY}`;

  //dummy initial value.
  let totalBackendPages = 10;

  const showPreviousPage = () => {
    console.log(`previous page called`);
    setDisplayPage(displayPage => displayPage - 1)
    setSlices((prevSlices) => [
      (prevSlices[0] = prevSlices[0] - 6),
      prevSlices[1] - 6,
    ]);
  };

  useEffect(() => {
    //It's rendering twice because I set showMore to false. This if statement will address that.
    if (showMore) {
      setDisplayPage(displayPage => displayPage + 1)
      console.log(displayPage)
      setSlices((prevSlices) => [
        (prevSlices[0] = prevSlices[1]),
        prevSlices[1] + 6,
      ]);
    }
  }, [showMore]);

  useEffect(() => {
    console.log(
      `six check: allresults length: ${allResults.length}, slices[1]: ${slices[1]}`
    );
    //ensures it won't run on refresh
    if (allResults.length < slices[1] && slices[1] != INIT_MAX_RESULTS) {
      console.log(`backend pages incremented`);
        backendPages++;
      fetchMovies();
      console.log(
        `page fetch ran. allresults length: ${allResults.length}. slices : ${slices[0]}, ${slices[1]}`
      );
    } else {
      setSix(allResults.slice(slices[0], slices[1]));
    }
    setShowMore(false);
  }, [slices]);

  //removed keyword param, as we no longer append it to URL.
  async function fetchMovies() {
    setLoading(true);

    //I needed to update the URL manually, as updating the variables (backendPages) wouldn't change it.
    console.log(`backend pages pre-fetch: ${backendPages}`);
    URL = `http://www.omdbapi.com/?s=${keyword}&page=${backendPages}&apikey=${API_KEY}`;
    console.log(URL);
    const response = await axios.get(URL);
    const movies = response.data;
    setAllResults((allResults) => allResults.concat(movies.Search));
    //Runs only on first go for new keyword.
    if (backendPages === 1) {
      totalBackendPages = Math.ceil(movies.totalResults / PAGE_SIZE);
      // setSix(allResults.slice(slices[0], slices[1]));
    }
  }

  //Updates new set of 6 movies to display
  useEffect(() => {
    // console.log(`allResults:`)
    // console.log(allResults)
    // console.log(`slices for six: ${slices[0]}, ${slices[1]}`);
    setSix(allResults.slice(slices[0], slices[1]));

    //So you can see the skeleton
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [allResults]);

  useEffect(() => {
    // console.log(`six changed:`);
    // console.log(six);
  }, [six]);

  //if we have a new keyword, we reset values.
  useEffect(() => {
    if (keyword !== undefined && keyword !== prevKeywordRef.current) {
      setAllResults([]);
      setSix([]);
      setSlices((prevSlices) => [
        (prevSlices[0] = 0),
        (prevSlices[1] = INIT_MAX_RESULTS),
      ]);
      setDisplayPage(1);
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
            Search results for "<span className="text_emphasis">{keyword}</span>
            "
            <div className="page__arrows">
              {displayPage <= 1 ? (
                <FaChevronLeft className="no_cursor greyed_out" />
              ) : (
                <FaChevronLeft
                  className="cursor hover_effect"
                  onClick={() => showPreviousPage()}
                />
              )}

              {displayPage < totalBackendPages ? (
                <FaChevronRight
                  className="cursor hover_effect"
                  onClick={() => setShowMore(true)}
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
