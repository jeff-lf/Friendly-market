import {Container, Animation} from './style'

/*aqui na props, vc pode deixar apenas home, e na hora q for chamar o componente
a pessoa passa a home={true} */

/*nao esquece de adicionar uma alt pra img, se n fica aparecendo um errinho chato, pode colocar 
tipo "Imagem de Apresentação" */

export const Presentation = ({home=true}) => {
return(
   
    <Container>
        {home?  (<>
        <h2>Compre diretamente dos seus vizinhos</h2>
        <p>Negocie com pessoas da sua cidade com mais segurança e proximidade do vendedor</p>
        
        <Animation>
            <img src='https://elements-cover-images-0.imgix.net/ab25718c-9d6c-4507-8460-c127f8aefa2a?auto=compress%2Cformat&fit=max&w=1170&s=60a1e19f8ef165b1ed56bf2ab9d2e41e'></img>
        </Animation>
        </>
        ): (
            <p>alo</p>
        )
        }
    </Container>
    
)
} 