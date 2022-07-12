import { CatalogueProvider } from "./catalogue/catalogue";
import { ChatProvider } from "./chat";
import { CityProvider } from "./localization";

function Providers({ children }) {
  return (
    <>
      <CityProvider>
        <CatalogueProvider>
          <ChatProvider> {children}</ChatProvider>
        </CatalogueProvider>
      </CityProvider>
    </>
  );
}

export default Providers;
