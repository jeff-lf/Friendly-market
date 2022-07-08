import { Container, PageContainer } from "./styles";
import { Avatar } from "@mui/material";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { useHistory } from "react-router-dom";
import { CatalogueContext } from "../../contexts/catalogue/catalogue";
import { useContext } from "react";

export const Header = () => {
  const history = useHistory("");

  const { request } = useContext(CatalogueContext);

  //localStorage.setItem()
  const token = localStorage.getItem("@token");

  const handleClick = () => {
    history.push("/dashboard");
    request();
  };

  return (
    <PageContainer>
      <Container>
        <h1>Friendly Market</h1>
        <div className="buttons">
          <button onClick={handleClick}>Produtos</button>
          <button>Eventos</button>
          <button onClick={() => history.push("/aboutUs")}>Sobre</button>
        </div>
        <div>
          {token ? (
            <button>
              <Avatar alt="" src="" />
              <FormatAlignJustifyIcon />
            </button>
          ) : (
            <button onClick={() => history.push("/register")}>Entrar</button>
          )}
        </div>
      </Container>
    </PageContainer>
  );
};
