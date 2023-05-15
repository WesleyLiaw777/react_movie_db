import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Poster({ movie }) {
  let navigate = useNavigate();
  return (
    <>
      <div
        className="movie"
        key={movie.imdbID}
        onClick={() => navigate(`/movie/${movie.imdbID}`)}
      >
        <figure className="movie__poster--wrapper">
          <img className="movie__poster" src={movie.Poster} alt={movie.Title} />
        </figure>
        <div className="movie__info">
          <h4 className="movie__title">{movie.Title}</h4>
          <h5>{movie.Year}</h5>
        </div>
      </div>
    </>
  );
}
export default Poster;
