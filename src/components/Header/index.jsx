import { Container, PageContainer } from "./styles";
import { Avatar } from "@mui/material";
import { useHistory } from "react-router-dom";
import Button from "../Button";
import { api } from "../../services/api";

export const Header = () => {
  const history = useHistory("");

  const token = localStorage.getItem("@Market:token");
  const id = localStorage.getItem("@Market:id");

  const dataUser = () => {
    api.get(`users/${id}`).then((res) => {
      const { user_image } = res;
      localStorage.setItem("@Market:img", JSON.stringify(user_image));
    });
  };

  if (id) {
    dataUser();
  };
  
  const userImg = localStorage.getItem("@Market:img");

  return (
    <PageContainer>
      <Container>
        <h1 className="titleHome" onClick={() => history.push("/")}>Friendly Market</h1>
        <div className="buttons">
          <Button
            handlerClick={() => history.push("/dashboard")}
            title="produtos"
          ></Button>
          <Button title="anunciar"></Button>
          <Button
            handlerClick={() => history.push("/aboutUs")}
            title="sobre"
          ></Button>
        </div>
        <div>
          {token ? (
            <button className="avatar">
              <Avatar
                alt="foto do usuario"
                sx={{ bgcolor: "#83D0C8" }}
                src={userImg}
              />
            </button>
          ) : (
            <Button
              handlerClick={() => history.push("/login")}
              title="Entrar"
              blue
            ></Button>
          )}
        </div>
      </Container>
    </PageContainer>
  );
};
