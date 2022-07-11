import { Container, PageContainer } from "./styles"
import { Avatar } from '@mui/material'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import { useState } from "react"
import { useHistory } from "react-router-dom"
import Button from '../Button'


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
                <Button handlerClick={() => handleClick()}title='Produtos'></Button>
                <Button handlerClick={() => history.push('/perfil')} title='Anunciar'></Button>
                <Button handlerClick={() => history.push('/aboutUs')} title='Sobre'></Button>
            </div>
            <div>
                {token? (<Button><Avatar alt="" src="" /></Button>) : 
                    (<Button handlerClick={() => history.push('/login')} title='Entrar' blue></Button>)
                }
                
            </div>
        </Container>

        </PageContainer>
    )
}