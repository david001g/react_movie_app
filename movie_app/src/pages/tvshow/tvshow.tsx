import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Grid, Header, Loader, Segment, Image, List } from "semantic-ui-react";
import { fetchTvShowDetails } from "./query";

export const TvShow = () => {
  const { id } = useParams<string>();

  if (!id) {
    return <div>Invalid ID</div>;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchTvShowDetails(id),
  });

  if (isLoading) {
    return <Loader active />;
  }

  return (
    <div style={{ marginTop: 50 }}>
      <Segment>
        <Header>{data.name}</Header>
        <Grid columns={2} divided textAlign="left" style={{ marginTop: 20 }}>
          <Grid.Row>
            <Grid.Column width={6}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                  size="medium"
                  centered
                ></Image>
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              <List>
                <List.Item>
                  <List.Header>Is the Movie for Adults: </List.Header>
                  {data.adult ? "Yes" : "No"}
                </List.Item>
                <List.Item>
                  <List.Header>Number of Episodes: </List.Header>
                  {data.number_of_episodes}
                </List.Item>
                <List.Item>
                  <List.Header>Budget: </List.Header>
                  {data.budget}
                </List.Item>
                <List.Item>
                  <List.Header>Genres: </List.Header>
                  {data.genres.map((genre: any) => genre.name).join(", ")}
                </List.Item>
                <List.Item>
                  <List.Header>Original Language: </List.Header>
                  {data.original_language}
                </List.Item>
                <List.Item>
                  <List.Header>Original Title: </List.Header>
                  {data.original_title}
                </List.Item>
                <List.Item>
                  <List.Header>Popularity: </List.Header>
                  {data.popularity}
                </List.Item>
                <List.Item>
                  <List.Header>Production Companies: </List.Header>
                  {data.production_companies
                    .map((company: any) => company.name)
                    .join(", ")}
                </List.Item>
                <List.Item>
                  <List.Header>Revenue: </List.Header>
                  {data.revenue}
                </List.Item>
                <List.Item>
                  <List.Header>Runtime: </List.Header>
                  {data.runtime}
                </List.Item>
                <List.Item>
                  <List.Header>Spoken Languages: </List.Header>
                  {data.spoken_languages
                    .map((language: any) => language.name)
                    .join(", ")}
                </List.Item>
                <List.Item>
                  <List.Header>Status: </List.Header>
                  {data.status}
                </List.Item>
                <List.Item>
                  <List.Header>Tagline: </List.Header>
                  {data.tagline}
                </List.Item>
                <List.Item>
                  <List.Header>Vote Count: </List.Header>
                  {data.vote_count}
                </List.Item>
                <List.Item>
                  <List.Header>Rating: </List.Header>
                  {data.vote_average}
                </List.Item>
                <List.Item>
                  <List.Header>Release Date: </List.Header>
                  {data.release_date}
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};
