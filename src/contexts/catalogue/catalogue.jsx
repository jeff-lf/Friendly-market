import axios from "axios";
import { createContext, useState } from "react";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([]);

  const request = () => {
    axios
      .get("https://api-friendly-market.herokuapp.com/products")
      .then((res) => {
        setCatalogue(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CatalogueContext.Provider value={{ catalogue, request }}>
      {children}
    </CatalogueContext.Provider>
  );
};
