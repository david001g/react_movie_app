export const fetchMovieDetails = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWQ0NzU2YmFiYzY3YzJhYzk5ZGNiZGExOWEyNjg1NCIsInN1YiI6IjY1NzUzZWI5YTg0YTQ3MDEzODIxYzA4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ola4XjscZLYxy-oe7dp-E9h5QnmtSxdm4B5o7oQQCOs",
      },
    }
  );
  return res.json();
};
