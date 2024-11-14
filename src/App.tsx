import { AppShell, Button, Grid, SimpleGrid, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "./App.module.css";
import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
const API_URL = "http://www.omdbapi.com?apikey=c032e2d7";
const App = () => {
  const Icon = <IconSearch size={16} stroke={1.5} />;
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error.message);
    }
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);
  return (
    <AppShell>
      <div className={classes.searchContainer}>
        <TextInput
          className={classes.searchInput}
          leftSectionPointerEvents="none"
          rightSection={Icon}
          placeholder="Search the movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={() => searchMovies(searchTerm)}>search</Button>
      </div>

      <Grid grow>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <h2 className={classes.noMoviesFound}>No movies found</h2>
        )}
      </Grid>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}></Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
      </Grid>
    </AppShell>
  );
};

export default App;
