import {Container, Animation} from './style'
import presentation from '../../assets/presentation.png'

export const Presentation = () => {
return(
   
    <Container>
        <>
            <h2>Compre diretamente dos seus vizinhos</h2>
            <p>Negocie com pessoas da sua cidade com mais segurança e proximidade do vendedor</p>
            
            <Animation>
                <img alt="Imagem de apresentação" src={presentation}></img>
            </Animation>
        </>
    </Container>
    
)
} 