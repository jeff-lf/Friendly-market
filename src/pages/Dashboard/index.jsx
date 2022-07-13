import { Filters } from "../../components/Filters";
import { Header } from "../../components/Header";
import ProductList from "../../components/Products";


const Dashboard = () => {
  return (
    <>
      <Header />
      <Filters/>
      <ProductList />
    </>
  );
};

export default Dashboard;