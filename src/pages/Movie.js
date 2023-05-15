import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = `e4584088`;
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=`;

function Movie() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    async function fetchMovieInfo() {
      const { data } = await axios.get(URL + id);
      setMovieInfo(data);
    }
    fetchMovieInfo();
  }, [id]);

  return (
    <>
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
            <h4>{movieInfo.Runtime}</h4>
            <p>{movieInfo.Plot}</p>
          </div>
        </section>
      )}
    </>
  );
}

export default Movie;

// {
//     "Title": "The Matrix",
//     "Year": "1999",
//     "Rated": "R",
//     "Released": "31 Mar 1999",
//     "Runtime": "136 min",
//     "Genre": "Action, Sci-Fi",
//     "Director": "Lana Wachowski, Lilly Wachowski",
//     "Writer": "Lilly Wachowski, Lana Wachowski",
//     "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
//     "Plot": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
//     "Language": "English",
//     "Country": "United States, Australia",
//     "Awards": "Won 4 Oscars. 42 wins & 52 nominations total",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//     "Ratings": [
//       {
//         "Source": "Internet Movie Database",
//         "Value": "8.7/10"
//       },
//       {
//         "Source": "Rotten Tomatoes",
//         "Value": "88%"
//       },
//       {
//         "Source": "Metacritic",
//         "Value": "73/100"
//       }
//     ],
//     "Metascore": "73",
//     "imdbRating": "8.7",
//     "imdbVotes": "1,947,879",
//     "imdbID": "tt0133093",
//     "Type": "movie",
//     "DVD": "15 May 2007",
//     "BoxOffice": "$172,076,928",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
//   }
