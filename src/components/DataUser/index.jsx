import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { ContainerUserInfo, InfoDiv } from "./style";

const DataUser = () => {
  const [user, setUser] = useState("");
  const id = JSON.parse(localStorage.getItem("@Market:id"));
  const token = JSON.parse(localStorage.getItem("@Market:token"));

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .then((res) => {
        setUser(res.data);
        console.log(user);
      })
      .catch((err) => console.log(err));
  }, []);

  const EditUserInfo = (data) => {
    api
      .put(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Informações atualizadas com sucesso!");
      })
      .catch((err) => toast.error("Falha na atualização"));
  };

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
