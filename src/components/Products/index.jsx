import { useContext } from "react";
import { CatalogueContext } from "../../contexts/catalogue/catalogue";
import Card from "../CardProduct";

const ProductList = () => {
  const { catalogue } = useContext(CatalogueContext);

  return catalogue.map((item, index) => <Card key={index} item={item} />);
};

export default ProductList;
