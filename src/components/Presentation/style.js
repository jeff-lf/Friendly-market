import styled from "styled-components";
import { keyframes } from "styled-components";


export const Container = styled.div`
    height: 92vh;
    width: 50vw;
    padding-left: 20px;

    .titleName{
        max-width: 300px;
        margin: 3rem 0 1rem 7.5rem;
        line-height: 1.2;
        font-size: 28px;
    }

    .subtitleName{
        max-width: 16rem;
        margin-left: 7.5rem;
        font-size: 14px;
        line-height: 1.6;
    }

    img{
        margin-top: 40px;
        width: 35rem;
        margin-left: 5rem;
    }

`

const animation = keyframes`
  from {
    position: absolute;
    left: -560px;
    transform: scale(0.8) rotate(60deg);
  }

  to {
    position: absolute;
    left: 20px;
    transform: scale(1) rotate(0deg);
  }

`

export const Animation = styled.div`
    animation: ${animation} 2s ;
`

