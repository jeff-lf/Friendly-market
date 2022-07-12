import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => (props.blue ? "#173653" : "#83D0C8")};
  width: ${(props) => `${props.width}px`};
  font-size: 18px;
  border: 2px solid  ${(props) => (props.blue ? "#173653" : "#83D0C8")};
  border-radius: ${(props) => (props.quadrado ? "3px" : "15px")};
  color: white;
  padding: 8px;
  cursor: pointer;
  :hover {
    border: 2px solid #4797de;
  }
  :active {
    background-color: ${(props) => (props.blue ? "#102335" : "#5c8d88")};
  }
`;
