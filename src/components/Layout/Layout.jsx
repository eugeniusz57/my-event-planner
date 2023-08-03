import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import { Header, Inputsearch, Logo, Main, Nav, Search } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <Logo to="/">Event Planner</Logo>
            <Search>
              <button>
                <img src="/search.svg" alt="search" />
              </button>
              <Inputsearch type="search" placeholder="Search by keywords" />
            </Search>
          </Nav>
        </Container>
      </Header>

      <Main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};

export default Layout;
