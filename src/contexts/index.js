import { CatalogueProvider } from "./catalogue/catalogue";
import { CityProvider } from "./localization";

function Providers({ children }) {
  return (
    <>
      <CatalogueProvider>{children}</CatalogueProvider>
      <CityProvider>{children}</CityProvider>
    </>
  );
}

export default Providers;
