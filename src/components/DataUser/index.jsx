import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Button from "../Button";
import { EditUserModal } from "../EditUserModal";
import { ContainerUserInfo, InfoDiv, StyledH3, StyledP, StyledInfoP, StyledSection } from "./style";

const DataUser = () => {
  const [user, setUser] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("@Market:id"));

    api
      .get(`/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Paper sx={{padding: 5}}>
      <StyledSection>
        <StyledH3>Bem vinde, {'João José da Silva'}!</StyledH3>
        <StyledP>Gerenciar e proteger sua conta</StyledP>
        <ContainerUserInfo>
          <InfoDiv>
            <StyledInfoP>Nome</StyledInfoP>
            <StyledInfoP>{'João José da Silva'}</StyledInfoP>
          </InfoDiv>
          <InfoDiv>
            <StyledInfoP>Email</StyledInfoP>
            <StyledInfoP>{'email@email.com'}</StyledInfoP>
          </InfoDiv>
          <InfoDiv>
            <StyledInfoP>CPF</StyledInfoP>
            <StyledInfoP>{'10220123566'}</StyledInfoP>
          </InfoDiv>
          <InfoDiv>
            <StyledInfoP>Celular</StyledInfoP>
            <StyledInfoP>{'11 99875-9888'}</StyledInfoP>
          </InfoDiv>
          <InfoDiv>
            <StyledInfoP>Cidade</StyledInfoP>
            <StyledInfoP>{'Itubaina'}</StyledInfoP>
          </InfoDiv>
          <InfoDiv>
            <StyledInfoP>Imagem</StyledInfoP>
            <StyledInfoP>{"www.linkdaimagem.com"}</StyledInfoP>
          </InfoDiv>
        </ContainerUserInfo>
        <img src={"data:image/jpeg;base64,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"} alt="Imagem do usuário" />
        <Button handlerClick={() => setModal(true)} width={250} blue={'blue'} title={'EDITAR'}></Button>
        {modal && <EditUserModal user={user} setModal={setModal} />}
      </StyledSection>
    </Paper>
  );
};

export default DataUser;
