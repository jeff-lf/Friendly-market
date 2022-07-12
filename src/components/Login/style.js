import styled from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  height: 70vh;
  background-color: red;
  width: 300px;

  h3 {
    font-size: 24px;
    opacity: 65%;
  }

  label {
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 5px;
    font-size: 12px;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid #b5b5b5;
  border-radius: 4px;
  padding: 8px;
`;
