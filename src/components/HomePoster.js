import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_KEY = `e4584088`;
const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&i=`;

function HomePoster({ id }) {
  let navigate = useNavigate();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchMovie(id) {
      const response = await axios.get(URL + id);
      const movieData = response.data;
      setMovie(movieData);
    }
    fetchMovie(id);
  }, [id]);

  return (
    <>
      {movie ? (
        <div className="movie cursor" onClick={() => navigate(`/${id}`)}>
          <figure className="movie__poster--wrapper">
            <img
              className="movie__poster"
              src={movie.Poster}
              alt={movie.Title}
            />
          </figure>
          <div className="movie__info">
            <h4 className="movie__title">{movie.Title}</h4>
            <h5>{movie.Year}</h5>
          </div>
        </div>
      ) : (
        <>
          <div className="movie">
            <figure className="movie__poster--wrapper skeleton"></figure>
            <div className="movie__info--skeleton">
              <h4 className="movie__title--skeleton skeleton"></h4>
              <h5 className="movie__year--skeleton skeleton"></h5>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default HomePoster;
