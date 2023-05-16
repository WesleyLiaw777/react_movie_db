import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function Home() {
  let navigate = useNavigate();
  return (
    <>
      <SearchBar/>

      <section id="movie-display">
        <div className="container">
          <div className="row">
            <h1 className="display__heading">
              Here's our favorite recommendations:
            </h1>
            <div className="movie-list">
              <div className="movie cursor" onClick={() => navigate("/movie/tt0133093")}>
                <figure className="movie__poster--wrapper">
                  <img
                    className="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                    alt=""
                  />
                </figure>
                <div className="movie__info">
                  <h4 className="movie__title">The Matrix</h4>
                  <h5>1999</h5>
                </div>
              </div>
              <div className="movie cursor" onClick={() => navigate("/movie/tt0119217")}>
                <figure className="movie__poster--wrapper">
                  <img
                    className="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                    alt=""
                  />
                </figure>
                <div className="movie__info">
                  <h4 className="movie__title">Good Will Hunting</h4>
                  <h5>1997</h5>
                </div>
              </div>
              <div className="movie cursor" onClick={() => navigate("/movie/tt10366206")}>
                <figure className="movie__poster--wrapper">
                  <img
                    className="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
                    alt=""
                  />
                </figure>
                <div className="movie__info">
                  <h4 className="movie__title">John Wick: Chapter 4</h4>
                  <h5>2023</h5>
                </div>
              </div>
              <div className="movie cursor" onClick={() => navigate("/movie/tt4633694")}>
                <figure className="movie__poster--wrapper">
                  <img
                    className="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"
                    alt=""
                  />
                </figure>
                <div className="movie__info">
                  <h4 className="movie__title">
                    Spider-Man: Into the Spider-Verse
                  </h4>
                  <h5>2018</h5>
                </div>
              </div>
              <div className="movie cursor" onClick={() => navigate("/movie/tt2953050")}>
                <figure className="movie__poster--wrapper">
                  <img
                    className="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg"
                    alt=""
                  />
                </figure>
                <div className="movie__info">
                  <h4 className="movie__title">Encanto</h4>
                  <h5>2021</h5>
                </div>
              </div>
              <div className="movie cursor" onClick={() => navigate("/movie/tt5052448")}>
                <figure className="movie__poster--wrapper">
                  <img
                    className="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg"
                    alt=""
                  />
                </figure>
                <div className="movie__info">
                  <h4 className="movie__title">Get Out</h4>
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
