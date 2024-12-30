import { Badge, Group, Stack, Text } from "@mantine/core";
import classes from "./MovieCard.module.css";

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
}

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Stack className={classes.movieCard}>
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
        <Group justify="space-between">
          <Badge
            size="md"
            variant="gradient"
            gradient={{ from: "blue", to: "pink", deg: 90 }}
            p={10}
            radius={5}
          >
            {movie.Year}
          </Badge>
          <p>{movie.Type}</p>
        </Group>
      </div>
    </Stack>
  );
};

export default MovieCard;
