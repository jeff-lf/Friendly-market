import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => (props.blue ? "#173653" : "#83D0C8")};
  width: ${(props) => `${props.width}px`};
  font-size: 18px;
  border: none;
  border-radius: ${(props) => (props.quadrado ? "3px" : "15px")};
  color: white;
  padding: 7px 15px;
  cursor: pointer;

  :hover {
    background-color: grey;
  }
  :active {
    background-color: ${(props) => (props.blue ? "#102335" : "#5c8d88")};
  }
`;
