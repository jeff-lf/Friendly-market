import styled from "styled-components";

export const ContainerMyProducts = styled.div`
  width: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 12px 1px rgba(0, 0, 0, 0.42);
  box-shadow: 2px 2px 12px 1px rgba(0, 0, 0, 0.42);
  padding: 15px;
  .bemVindo {
    font-weight: 700;
    color: #555555;
  }
  span {
    color: grey;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px;
    ul {
      display: flex;
      scrollbar-width: none;
      list-style: none;
      overflow-x: scroll;
      width: 100%;
      gap: 10px;
    }
    @media (min-width: 550px) {
      .bemVindo {
        font-size: 80px;
        color: red;
        background-color: grey;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        gap: 10px;
      }
    }
  }
`;
