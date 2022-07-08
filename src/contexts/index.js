import { CatalogueProvider } from "./catalogue/catalogue";

function Providers({ children }) {
  return (
    <>
      <CatalogueProvider>{children}</CatalogueProvider>
    </>
  );
}

export default Providers;
