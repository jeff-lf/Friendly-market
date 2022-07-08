import { useContext } from "react";
import { CityContext } from "../../contexts/localization";

const CityFilter = () => {
  const { municipios, city, handleCapacity } = useContext(CityContext);

  return (
    <>
      <h4>Onde você está agora?</h4>

      <select id="estado" name="estado" onChange={handleCapacity}>
        {city.map((item) => (
          <option key={item.id} value={item.sigla}>
            {item.nome}
          </option>
        ))}
      </select>

      <select id="municipio" name="municipio" placeholder="Município">
        {municipios.map((item) => (
          <option key={item.id} value={item}>
            {item.nome}
          </option>
        ))}
      </select>
      <button>Pesquisar</button>
    </>
  );
};

export default CityFilter;
