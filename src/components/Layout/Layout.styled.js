import styled from "styled-components";
import { Link } from "react-router-dom";
import { Background } from "../../assets";

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #7b61ff;
  padding: 22px 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  color: #7b61ff;
  font-family: Alata;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Search = styled.form`
  display: flex;
  min-width: 410px;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;

  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  color: #888;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
`;

export const Inputsearch = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

export const Main = styled.main`
  padding-top: 60px;
  padding-bottom: 77px;
  flex: 1;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
`;
