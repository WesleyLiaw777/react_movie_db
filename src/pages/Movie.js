import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const API_KEY = `e4584088`;
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=`;

function Movie() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    async function fetchMovieInfo() {
      const { data } = await axios.get(URL + id);
      setMovieInfo(data);
    }
    fetchMovieInfo();
  }, [id]);

  return (
    <>
      <button onClick={goBack}>
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
            <h3>{movieInfo.Genre}</h3>
            {movieInfo.Type === "series" ? (
              <h4>Seasons: {movieInfo.totalSeasons}</h4>
            ) : (
              <h4>{movieInfo.Runtime}</h4>
            )}
            <p>{movieInfo.Plot}</p>
          </div>
        </section>
      )}
    </>
  );
}

export default Movie;
