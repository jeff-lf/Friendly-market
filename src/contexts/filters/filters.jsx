import { createContext, useContext, useState } from "react";
import { CatalogueContext } from "../catalogue/catalogue";

export const FiltersContext = createContext([]);

export const FiltersProvider = ({ children }) => {
    const { catalogue } = useContext(CatalogueContext)
    console.log(`@catalogo: ${catalogue}`)

    const [filtered, setFiltered] = useState([])


    const filterInputProducts = (input) => {
       let filterList =  catalogue.filter((product) => product.category || product.productName === input)
       setFiltered(filterList)
   }

   const filterProducts = (category) => {
       if(category === "Todos"){
           setFiltered(catalogue)
       }else{
           let filterList =  catalogue.filter((product) => product.category === category)
           setFiltered(filterList)
       }
   }
   
   return (
    <FiltersContext.Provider value={{ filtered, filterInputProducts, filterProducts}}>
      {children}
    </FiltersContext.Provider>
  );
}

