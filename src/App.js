import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const api_Url = "http://www.omdbapi.com?apikey=4fe6e3da";

const movie1 = {
  Title: "Dhoom",
  Year: "2004",
  imdbID: "tt0422091",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTk3MDNhODEtMWYyMC00NmVjLTg3NzgtNjI1MzA4ZmVhMjE2XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_SX300.jpg",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${api_Url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("thor");
  }, []);

  return (
    <div className="app">
      <h1>MovieHub</h1>
      <div className="search">
        <input
          placeholder="serach for Movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
// 4fe6e3da
