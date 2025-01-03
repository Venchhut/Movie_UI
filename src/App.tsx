import { Container, Grid, Group, SimpleGrid, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "./App.module.css";
import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Demo from "./components/darkmode/Demo";

const API_URL = "http://www.omdbapi.com?apikey=c032e2d7";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
  movie: string;
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const searchMovies = async (title: string) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", (error as Error).message);
    }
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <Container size="xl">
      <Group
        align="center"
        justify="center"
        gap="md"
        className={classes.searchContainer}
      >
        <TextInput
          className={classes.searchInput}
          leftSectionPointerEvents="none"
          rightSection={
            <button onClick={() => searchMovies(searchTerm)}>
              <IconSearch size={16} stroke={1.5} />
            </button>
          }
          placeholder="Search the movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchMovies(searchTerm);
            }
          }}
        />

        <Demo />
      </Group>

      <Grid grow>
        {movies.length > 0 ? (
          <SimpleGrid cols={{ base: 2, sm: 2, md: 4 }}>
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </SimpleGrid>
        ) : (
          <div className={classes.noMoviesFound}>
            <p>No movies found</p>
          </div>
        )}
      </Grid>
    </Container>
  );
};

export default App;
