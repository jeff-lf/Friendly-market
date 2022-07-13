import { Filters } from "../../components/Filters";
import { Header } from "../../components/Header";
import ProductList from "../../components/Products";
import { Container } from "./style";


const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Filters/>
      <ProductList />
    </Container>
  );
};

export default Dashboard;