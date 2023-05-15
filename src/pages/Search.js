import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
    let navigate = useNavigate();
  return (
    <>
      <h1 className="title">Search for a movie here!</h1>
      <div className="sort__search">
        <div className="sort__search--container">
          <input
            type="text"
            id="userInput"
            placeholder="Search here.."
            onkeypress="searchKeyword(event)"
          />
          <button id="zoomer-glass" onClick={() => navigate("/search")}>
            <FaSearch />
          </button>
        </div>
      </div>

      <section id="movie-display">searc</section>
    </>
  );
}
export default Search;
