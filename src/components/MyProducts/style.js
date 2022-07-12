import styled from "styled-components";

export const ContainerMyProducts = styled.div`
  width: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 12px 1px rgba(0, 0, 0, 0.42);
  box-shadow: 2px 2px 12px 1px rgba(0, 0, 0, 0.42);
  padding: 15px;
  span {
    color: grey;
  }
  .listContainer {
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

export const StyledH2 = styled.h2`
  font-weight: 600;
  font-size: 18px;
  color: #555555;
  @media (min-width: 550px) {
    font-size: 35px;
    font-weight: 400;
  }
`;
