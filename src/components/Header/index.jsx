import { Container } from "./styles"
import { Avatar } from '@mui/material'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'


export const Header = () => {

    const token = localStorage.getItem('@token')

    return (
        <Container>
            <h1>Friendly Market</h1>
            <div>
                <button>Produtos</button>
                <button>Eventos</button>
                <button>Sobre</button>
            </div>
            <div>
                {token? (<button><Avatar alt="" src="" /><FormatAlignJustifyIcon/></button>) : 
                    (<button>Entrar</button>)
                }
                
            </div>
        </Container>
    )
}