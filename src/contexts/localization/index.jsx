import { createContext, useEffect, useState } from "react";

export const CityContext = createContext([]);

export const CityProvider = ({ children }) => {
  const [select, setSelect] = useState();

  const [city, setCity] = useState([]);
  const [municipios, setMunicipios] = useState([]);

  const handleCapacity = (e) => {
    setSelect(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`
    )
      .then((response) => response.json())
      .then((response) => setCity(response))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${select}/municipios?orderBy=nome`
    )
      .then((response) => response.json())
      .then((response) => setMunicipios(response))
      .catch((err) => console.log(err));
  }, [select]);

  return (
    <CityContext.Provider value={{ select, handleCapacity, municipios, city }}>
      {children}
    </CityContext.Provider>
  );
};
