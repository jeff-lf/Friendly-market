import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .aboutusContainer {
    display: flex;
    justify-content: space-between;
    width: 75vw;
    height: 75vh;
  }

  .left {
    width: 35vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 3rem;

    span {
      color: grey;
      max-width: 16rem;
      font-size: 11px;
      line-height: 1.6;
      margin-bottom: 5px;
    }

    h1{
        font-size: 22px;
    }

    .imgAbout {
      width: 42rem;
    }
  }

  .right {
    width: 30vw;
    margin-top: 3rem;

    p {
      margin-top: 3rem;
      font-size: 16px;
    }
  }

  .apresentation {
    width: 75vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;

    span {
      color: grey;
      max-width: 16rem;
      font-size: 14px;
      line-height: 1.6;
      margin-top: 5rem;
    }
  }

  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 40px;
  }

  .card {
    width: 36vw;
    height: 200px;
    display: flex;

      img {
        width: 120px;
        height: 120px;
        border-radius: 100%;
        margin-left: 15px;
      }
    }

    .textContainer {
      width: 65%;
      margin-left: 18px;
      margin-top: 4px;

      p{
        font-size: 13px;
        margin-top: 7px;
        line-height: 1.2;
      }
    }

`
