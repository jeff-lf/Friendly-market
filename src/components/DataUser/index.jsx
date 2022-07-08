import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { StyledButton } from "../Button/styled";
import { ContainerUserInfo, InfoDiv } from "./style";

const DataUser = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("@Market:id"));

    api
      .get(`/users/${id}`)
      .then((res) => {
        setUser(res.data);
        console.log(user);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="dataUser">
      <h3>Bem vinde, {user.fullname}!</h3>
      <p>Gerenciar e proteger sua conta</p>
      <ContainerUserInfo>
        <InfoDiv>
          <p>Nome</p>
          <p>{user.fullname}</p>
        </InfoDiv>
        <InfoDiv>
          <p>Email</p>
          <p>{user.email}</p>
        </InfoDiv>
        <InfoDiv>
          <p>CPF</p>
          <p>{user.cpf}</p>
        </InfoDiv>
        <InfoDiv>
          <p>Celular</p>
          <p>{user.cellphone}</p>
        </InfoDiv>
        <InfoDiv>
          <p>Cidade</p>
          <p>{user.city}</p>
        </InfoDiv>
        <InfoDiv>
          <p>Imagem</p>
          <p>{user.user_image}</p>
        </InfoDiv>
        <InfoDiv>
          <p>Senha</p>
          <p>*****</p>
        </InfoDiv>
      </ContainerUserInfo>
      <img src={user.user_image} alt="Imagem do usuário" />
      <button>EDITAR</button>
    </section>
  );
};

export default DataUser;
