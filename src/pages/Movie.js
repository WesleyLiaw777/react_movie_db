import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaPlus, FaTicketAlt } from "react-icons/fa";

const API_KEY = `e4584088`;
const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&i=`;

function Movie() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [genres, setGenres] = useState([]);
  const [runtime, setRuntime] = useState([]);

  let navigate = useNavigate();

  const goBack = () => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.substring(0, currentPath.lastIndexOf("/"));
    if (newPath === "") {
      navigate("/");
    }
    window.location.href = newPath;
  };

  useEffect(() => {
    async function fetchMovieInfo() {
      const { data } = await axios.get(URL + id);
      setMovieInfo(data);
      setGenres(data.Genre.split(","));

      //gets runtime in minutes
      setRuntime(data.Runtime.match(/(\d+)/)[0]);
    }
    fetchMovieInfo();
  }, [id]);

  return (
    <>
      <button onClick={goBack} className="back__button dark__button cursor">
        <FaArrowLeft /> Back
      </button>

      {movieInfo && (
        <section id="movie_page">
          <div>
            <figure className="main__movie--wrapper">
              <img className="movie__poster" src={movieInfo.Poster} alt="" />
            </figure>
          </div>

          <div className="main__movie--info">
            <h1 className="main__movie--title">{movieInfo.Title}</h1>
            <div className="main__movie--subinfo">
              <div>
                {movieInfo.Year}
                &nbsp;&middot;&nbsp;
              </div>
              <div>
                {movieInfo.Type === "series" ? (
                  <div>Seasons: {movieInfo.totalSeasons}</div>
                ) : (
                  <div>
                    {Math.floor(runtime / 60)} hr {runtime % 60} min
                  </div>
                )}
              </div>
              <div>
                &nbsp;&middot;&nbsp;
                {movieInfo.Rated}
              </div>
            </div>
            <div>
              {genres.map((genre, index) => {
                return (
                  <button className="cursor genre__button" key={index}>
                    {genre}
                  </button>
                );
              })}
            </div>
            <p className="main__movie--description">{movieInfo.Plot}</p>
            <button className="main__movie--button showtime__button cursor">
              <FaTicketAlt className="main__button--icon showtime__icon" />
              <div className="movie__button--info">
                <h4>See Showtimes</h4>
                <h5>and tickets</h5>
              </div>
            </button>
            <button className="main__movie--button watchlist__button cursor">
              <FaPlus className="main__button--icon watchlist__icon" />
              <div className="movie__button--info watchlist__button--info">
                <h4>Add to Watchlist</h4>
                <h5 className="main__button--subtext">
                  Upvoted by {movieInfo.imdbVotes} viewers
                </h5>
              </div>
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default Movie;
