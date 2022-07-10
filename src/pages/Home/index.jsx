import CityFilter from "../../components/CityFilter";
import { Header } from "../../components/Header";
import { Container } from "./styled";
import * as React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div>Apresentaçao</div>
        <CityFilter />
      </Container>
    </>
  );
};

export default Home;
