import { CatalogueProvider } from "./catalogue/catalogue";
import { CityProvider } from "./localization";

function Providers({ children }) {
  return (
    <>
      
      <CityProvider>
        <CatalogueProvider>
          {children}
        </CatalogueProvider>
      </CityProvider>
    </>
  );
}

export default Providers;
