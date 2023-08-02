import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import { Header, Inputsearch, Logo, Nav, Search } from "./Layout.styled";

const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Logo to="/">Event Planner</Logo>
          <Search>
            <button></button>
            <Inputsearch type="search" placeholder="Search by keywords" />
          </Search>
        </Nav>
      </Header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer>2023</footer>
    </Container>
  );
};

export default Layout;
