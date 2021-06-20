import { useState, useEffect } from "react";
import "./index.css";
import Movie from "./components/Movie";

const API_KEY = process.env.REACT_APP_API_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const SEARCH_API = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=`;

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (api) => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      const searchQuery = searchTerm.replace(" ", "+");
      getMovies(SEARCH_API + searchQuery);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const homePage = () => {
    getMovies(FEATURED_API);
  }

  return (
    <>
      <header>
        <h1 onClick={homePage} className='logo'>The<span>TV</span>DB</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
