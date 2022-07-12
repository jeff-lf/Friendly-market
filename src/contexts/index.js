import { CatalogueProvider } from "./catalogue/catalogue";
import { CityProvider } from "./localization";
import {FiltersProvider} from "./filters/filters"

function Providers({ children }) {
  return (
    <>
      
        <CityProvider>
          <CatalogueProvider>
            <FiltersProvider>
              {children}
            </FiltersProvider>
          </CatalogueProvider>
        </CityProvider>
      
    </>
  );
}

export default Providers;
