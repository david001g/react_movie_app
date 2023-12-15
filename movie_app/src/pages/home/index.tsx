import { useState } from "react";
import { Button } from "semantic-ui-react";
import { ColumnDisplay } from "../../components/column-display";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies, fetchTvShows } from "./query";

export enum DisplayType {
  MOVIES = "MOVIES",
  TV_SHOWS = "TV_SHOWS",
}

export const Home = () => {
  const { data: movieData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  const { data: tvShowsData, isLoading: isLoadingTvShows } = useQuery({
    queryKey: ["tvShows"],
    queryFn: fetchTvShows,
  });

  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.MOVIES
  );
  return (
    <div style={{ marginTop: 50, height: "auto" }}>
      <Button.Group>
        <Button
          color={displayType === DisplayType.MOVIES ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.MOVIES)}
        >
          Movies
        </Button>
        <Button
          color={displayType === DisplayType.TV_SHOWS ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.TV_SHOWS)}
        >
          TV Shows
        </Button>
      </Button.Group>

      {isLoadingMovies || isLoadingTvShows ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{ marginTop: 20 }}>
          {displayType === DisplayType.MOVIES ? (
            <ColumnDisplay
              data={movieData.results}
              displayType={DisplayType.MOVIES}
            />
          ) : (
            <ColumnDisplay
              data={tvShowsData.results}
              displayType={DisplayType.TV_SHOWS}
            />
          )}
        </div>
      )}
    </div>
  );
};
