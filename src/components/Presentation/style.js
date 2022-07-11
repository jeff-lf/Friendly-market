import styled from "styled-components";
import { keyframes } from "styled-components";


export const Container = styled.div`
    height: 92vh;
    width: 50vw;
    padding-left: 20px;

    h2{
        max-width: 300px;
        margin-left: 50px;
        margin-top: 50px;
    }

    p{
        max-width: 250px;
        margin-left: 50px;
    }

    img{
        margin-top: 40px;
        
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

