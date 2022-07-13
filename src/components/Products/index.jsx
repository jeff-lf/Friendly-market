import { useContext } from "react";
import { CatalogueContext } from "../../contexts/catalogue/catalogue";
import { FiltersContext } from "../../contexts/filters/filters";
import Card from "../CardProduct";

const ProductList = () => {
  const { catalogue } = useContext(CatalogueContext);

  const { filtered } = useContext(FiltersContext);

  return (
    <>
      {filtered.length > 0
        ? filtered.map((item, index) => <Card key={index} item={item} />)
        : catalogue.map((item, index) => <Card key={index} item={item} />)}
    </>
  );
};

export default ProductList;
