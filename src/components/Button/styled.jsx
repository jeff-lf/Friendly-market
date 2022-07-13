import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => (props.blue ? "#173653" : "#83D0C8")};
  width: ${(props) => `${props.width}px`};
  font-size: 18px;
  border: 2px solid  ${(props) => (props.blue ? "#173653" : "#83D0C8")};
  border-radius: ${(props) => (props.quadrado ? "3px" : "15px")};
  color: white;
  padding: 7px 15px;
  cursor: pointer;

  :hover {
<<<<<<< HEAD
    border: 2px solid #4797de;
    background-color: ${(props) => (props.blue ? "#102335" : "#5c8d88")};
=======
    background-color: grey;
>>>>>>> 52a58328c2e76f610d646d34c4e9a6e6bd4c6c97
  }
  :active {
    background-color: ${(props) => (props.blue ? "#102335" : "#5c8d88")};
  }
`;
