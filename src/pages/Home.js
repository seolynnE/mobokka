import { useEffect, useState } from "react";
import Movie from "../layout/Movie";
import styled from "styled-components";
import Loading from "../layout/Loading";

const MovieBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 950px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    max-width: unset;
    padding: 0 40px;
  }
`;
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <MovieBox>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              medium_cover_image={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </MovieBox>
      )}
    </>
  );
}
export default Home;
