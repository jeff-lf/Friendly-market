import { useContext } from "react";
import { CatalogueContext } from "../../contexts/catalogue/catalogue";
import { CityContext } from "../../contexts/localization";
import Card from "../CardProduct";

const ProductList = () => {
  const { catalogue } = useContext(CatalogueContext);
  const { inputMunicipio } = useContext(CityContext);

  const filter = catalogue.filter((item) => {
    return item.city === inputMunicipio;
  });

  return (
    <>
      {inputMunicipio === ""
        ? catalogue.map((item, index) => <Card key={index} item={item} />)
        : filter.map((item, index) => <Card key={index} item={item} />)}
    </>
  );
};

export default ProductList;
