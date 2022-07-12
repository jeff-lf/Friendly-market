import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 18vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;


    div{
        display: flex;
        flex-direction: row;

        .SearchButton{
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
        width: 45vw;
        height: 5vh;
        border: 2px solid black;
        border-radius: 5px;
        display: flex;
        align-items: center;

        input{
            border: none;
            width: 90%;
            margin-left: 5px;
            height: 4vh;
        }
        textarea:focus, input:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }

        button{
            height: 30px;
            margin-right: 10px;
        }

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid black;
            width: 40px;
            margin: 0px;
            height: 5vh;

        }
        svg{
            
            color: grey;
        }
`