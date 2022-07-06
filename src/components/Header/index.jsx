import { Container, ModalContainer, PageContainer } from "./styles"
import { Avatar } from '@mui/material'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import { useState } from "react"
import { useHistory } from "react-router-dom"


export const Header = () => {

    const [modal, setModal] = useState('')

    const history = useHistory('')

    const token = localStorage.getItem('@token')

    return (
        <PageContainer>
        <Container>
            <h1>Friendly Market</h1>
            <div className="buttons">
                <button onClick={() => history.push('/dashboard')}>Produtos</button>
                <button>Eventos</button>
                <button onClick={() => setModal('on')} >Sobre</button>
            </div>
            <div>
                {token? (<button><Avatar alt="" src="" /><FormatAlignJustifyIcon/></button>) : 
                    (<button onClick={() => history.push('/register')}>Entrar</button>)
                }
                
            </div>
        </Container>

        <ModalContainer status={modal}>
                <h3>Não sei oque escrever no titulo</h3>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Saepe voluptate non ea pariatur, 
                    nostrum officia ad praesentium nam itaque veniam possimus, 
                    amet est sequi quidem qui libero ipsum, distinctio ipsa.</p>
                
                </div>
                <button onClick={() => setModal('')}>Fechar</button>

        </ModalContainer>
        </PageContainer>
    )
}