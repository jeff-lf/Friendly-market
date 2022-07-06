import styled from "styled-components"

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Container = styled.nav`
    width: 100vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 2px solid black;
   
    button{
    margin: 20px;
   }
    
`

export const ModalContainer = styled.div`
    display: ${props => props.status === "on" ? "block" : "none"};
    background: #fff;
    width: 50vw;
    height: 80vh;
    margin-top: 6vh;
    position: absolute;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 1em grey; 
    z-index: 10;
    border-radius: 20px;


`