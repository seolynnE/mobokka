import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieWrap = styled.div`
  display: flex;
  flex: 0 1 31.9%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    max-width: 400px;
  }
  h2 {
    height: 52px;
    padding-top: 8px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }
  p {
    display: -webkit-box;
    padding-top: 6px;
    color: #2c2727;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    -webkit-line-clamp: 3; // 원하는 라인수
    -webkit-box-orient: vertical;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    width: 100%;
    padding-top: 4px;
    color: #2c2727;
    li {
      &::before {
        content: "/ ";
      }
      &:first-child::before {
        content: "";
      }
    }
  }
  @media (max-width: 1024px) {
    flex: auto;
    width: calc(100% / 2 - 10px);
  }
  @media (max-width: 620px) {
    width: 100%;
  }
`;

function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <MovieWrap>
      <Link to={`/movie/${id}`}>
        <img src={medium_cover_image} alt={title} />
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </Link>
    </MovieWrap>
  );
}

Movie.propTypes = {
  id: propTypes.string.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  generes: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
