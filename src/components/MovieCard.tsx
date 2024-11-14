import classes from "./MovieCard.module.css";
const MovieCard = ({ movie }) => {
  return (
    <div className={classes.movieCard}>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
      />
      <div>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <p>{movie.Type}</p>
      </div>
    </div>
  );
};

export default MovieCard;
