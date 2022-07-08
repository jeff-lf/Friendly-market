import { Container, PageContainer } from "./styles"
import { Avatar } from '@mui/material'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import { useState } from "react"
import { useHistory } from "react-router-dom"


export const Header = () => {

    const history = useHistory('')

    //localStorage.setItem()
    const token = localStorage.getItem('@token')

    const handleClick = () => {
        history.push("/dashboard")
       //request();
    }

    return (
        <PageContainer>
        <Container>
            <h1>Friendly Market</h1>
            <div className="buttons">
                <button onClick={() => handleClick()}>Produtos</button>
                <button>Anunciar</button>
                <button onClick={() => history.push('/aboutUs')} >Sobre</button>
            </div>
            <div>
                {token? (<button><Avatar alt="" src="" /><FormatAlignJustifyIcon/></button>) : 
                    (<button onClick={() => history.push('/register')}>Entrar</button>)
                }
                
            </div>
        </Container>

        </PageContainer>
    )
}