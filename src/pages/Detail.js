import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../layout/Loading";

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  img {
    max-width: 1024px;
    width: 100%;
  }
  h2 {
    padding-top: 16px;
    font-size: 28px;
    font-weight: bold;
  }
  ul {
    display: flex;
    gap: 6px;
    padding-top: 8px;
    li {
      &::before {
        content: "/ ";
      }
      &:first-child::before {
        content: "";
      }
    }
  }
  p {
    max-width: 800px;
    padding-top: 12px;
    font-size: 18px;
    text-align: center;
  }
`;

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  };
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <DetailWrap>
          <img src={movie.background_image_original} alt={movie.title} />
          <h2>{movie.title_long}</h2>
          <ul>
            {movie.genres?.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>{movie.description_full}</p>
        </DetailWrap>
      )}
    </>
  );
}
export default Detail;
