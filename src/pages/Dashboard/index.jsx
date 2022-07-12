import Chat from "../../components/Chat";
import { Header } from "../../components/Header";
import ProductList from "../../components/Products";

const Dashboard = () => {
  return (
    <>
      <Header />
      <ProductList />
      <Chat />
    </>
  );
};

export default Dashboard;
