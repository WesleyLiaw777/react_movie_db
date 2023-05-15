import { useNavigate } from "react-router-dom";
import {FaSearch} from "react-icons/fa"

function Home() {
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

      <section id="movie-display">
        <div class="container">
          <div class="row">
            <h1 class="display__heading">
              Here's our favorite recommendations:
            </h1>
            <div class="movie-list">
              <div class="movie">
                <figure class="movie__poster--wrapper">
                  <img
                    class="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                    alt=""
                  />
                </figure>
                <div class="movie__info">
                  <h4 class="movie__title">The Matrix</h4>
                  <h5>1999</h5>
                </div>
              </div>
              <div class="movie">
                <figure class="movie__poster--wrapper">
                  <img
                    class="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                    alt=""
                  />
                </figure>
                <div class="movie__info">
                  <h4 class="movie__title">Good Will Hunting</h4>
                  <h5>1997</h5>
                </div>
              </div>
              <div class="movie">
                <figure class="movie__poster--wrapper">
                  <img
                    class="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
                    alt=""
                  />
                </figure>
                <div class="movie__info">
                  <h4 class="movie__title">John Wick: Chapter 4</h4>
                  <h5>2023</h5>
                </div>
              </div>
              <div class="movie">
                <figure class="movie__poster--wrapper">
                  <img
                    class="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"
                    alt=""
                  />
                </figure>
                <div class="movie__info">
                  <h4 class="movie__title">
                    Spider-Man: Into the Spider-Verse
                  </h4>
                  <h5>2018</h5>
                </div>
              </div>
              <div class="movie">
                <figure class="movie__poster--wrapper">
                  <img
                    class="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg"
                    alt=""
                  />
                </figure>
                <div class="movie__info">
                  <h4 class="movie__title">Encanto</h4>
                  <h5>2021</h5>
                </div>
              </div>
              <div class="movie">
                <figure class="movie__poster--wrapper">
                  <img
                    class="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg"
                    alt=""
                  />
                </figure>
                <div class="movie__info">
                  <h4 class="movie__title">Get Out</h4>
                  <h5>2017</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
