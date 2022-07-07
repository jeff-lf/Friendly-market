import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 18vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    div{
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        

        button{
        background: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 100px;
        border: none;
        margin: 10px;
        }

        .searchImg{
        width: 90px;
        height: 82px;
        border-radius: 100%;
        background-color: lightgray;
        border: none;   
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px;
        }
        
    }
   
`

export const SearchInput = styled.div`
        width: 30vw;
        height: 4vh;
        border: 2px solid black;
        border-radius: 5px;

        input{
            border: none;
            width: 75%;
            margin-left: 5px;
        }
        textarea:focus, input:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    
        div{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        svg{
            margin-bottom: 16px;
            color: grey;
        }
`