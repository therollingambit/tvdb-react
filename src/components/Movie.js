const IMAGE_URL = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) return "green";
  else if (vote >= 6) return "orange";
  else return "red";
};

const Movie = ({ name, overview, poster_path, vote_average }) => {
  return (
    <div className="movie">
      <div className="movie-header">
        <img
          src={
            poster_path
              ? IMAGE_URL + poster_path
              : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          }
          alt={name}
        />
        <div className="movie-info">
          <h3>{name}</h3>
          <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </span>
        </div>

        <div className="movie-over">
          <h2>Overview:</h2>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
