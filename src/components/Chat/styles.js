import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;

  .form-container {
    max-width: 300px;
    padding: 10px;
    background-color: white;
  }

  .form-container textarea {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
    resize: none;
    min-height: 200px;
  }

  .form-container textarea:focus {
    background-color: #ddd;
    outline: none;
  }
`;
