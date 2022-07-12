import styled from "styled-components";

export const Modal = styled.div`
  display: ${(props) => `${props.display}`};
 

`;

export const ContainerModal = styled.div`
  background-color: rgba(88, 88, 88, 0.25);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  display: ${(props) => `${props.display}`};
`

export const Div1 = styled.div`
  color:#F8F9FA;
  font-weight: 700;
  border-radius: 4px 4px 0px 0px;
  height: 15%;
  width: 100%;
  background-color: var(--greyTwo);
  display: flex;
  justify-content: space-between;
  padding: 15px;
  button {
    background-color: var(--greyTwo);
    border: none;
    font-family: "Nunito";
    color: #868e96;
  }
`
