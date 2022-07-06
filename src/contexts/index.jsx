import { CityProvider } from "./localization";

function Providers({ children }) {
  return (
    <>
      <CityProvider>{children}</CityProvider>
    </>
  );
}

export default Providers;
