import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.nav`
  width: 100vw;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid black;

  div {
    button {
      margin: 20px;
    }
  }

  .avatar {
    background: none;
    border: none;

    :hover {
      transform: scale(1.2);
    }
  }

  .titleHome {
    font-size: 28px;
    cursor: pointer;
  }

  @media screen and (min-width: 319px) and (max-width: 650px) {
    .titleHome {
      font-size: 18px;
      margin-left: 2.5rem;
    }

    .buttons {
      display: flex;
      margin: 4rem 2rem 4rem 2rem;
      overflow: scroll;
    }

    div {
      button {
        margin: 0 8px 8px 0;
      }
    }
  } ;
`;
