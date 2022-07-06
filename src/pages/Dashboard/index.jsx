import { useContext } from "react";
import ProductList from "../../components/Products";
import { CatalogueContext } from "../../contexts/catalogue/catalogue";

const Dashboard = () => {
  const { request } = useContext(CatalogueContext);
  console.log(request);

  return (
    <>
      <button onClick={request}>request</button>
      <ProductList />
    </>
  );
};

export default Dashboard;
