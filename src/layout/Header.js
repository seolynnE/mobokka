import { Link } from "react-router-dom";
import styled from "styled-components";
const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 20px;
  background-color: #2c2727;
  color: #fff;
  h1 a {
    font-size: 32px;
    font-weight: 900;
  }
`;

function Header() {
  return (
    <HeaderWrap>
      <h1>
        <Link to="/">MOBOKKA</Link>
      </h1>
    </HeaderWrap>
  );
}

export default Header;
