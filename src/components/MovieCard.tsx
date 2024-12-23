import { Badge, Text } from "@mantine/core";
import classes from "./MovieCard.module.css";

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
}

const MovieCard = ({ movie }: { movie: Movie }) => {
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
        <Text size="xl">{movie.Title}</Text>
        <Badge
          size="xs"
          variant="gradient"
          gradient={{ from: "blue", to: "pink", deg: 90 }}
        >
          {movie.Year}
        </Badge>
        <p>{movie.Type}</p>
      </div>
    </div>
  );
};

export default MovieCard;
