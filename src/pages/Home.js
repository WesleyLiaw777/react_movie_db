import SearchBar from "../components/SearchBar";
import HomePoster from "../components/HomePoster";

const movies = [
  { id: "tt0133093", title: "The Matrix" },
  { id: "tt0119217", title: "Good Will Hunting" },
  { id: "tt10366206", title: "John Wick" },
  { id: "tt4633694", title: "Spider-Man: Into the Spider-Verse" },
  { id: "tt2953050", title: "Encanto" },
  { id: "tt5052448", title: "Get Out" },
];

function Home() {
  return (
    <>
      <SearchBar />
      <section id="movie-display">
        <div className="container">
          <div className="row">
            <h1 className="display__heading">
              Here's our <span className="text_emphasis">favorite</span>{" "}
              recommendations:
            </h1>
            <div className="movie-list">
              {movies.map((movie) => (
                <HomePoster key={movie.id} id={movie.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
