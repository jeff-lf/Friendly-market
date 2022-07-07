import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import TheaterComedyOutlinedIcon from '@mui/icons-material/TheaterComedyOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Container, SearchInput } from "./style"
import { useContext, useState } from "react";

export const Filters  = () => {

    const [input, setInput] = useState('')
    console.log(input)

    //deve começar com os produtos de acordo com a cidade
    const [filtered, setFiltered] = useState([])


    //const { catalogue } = useContext(CatalogueContext)

    const filterProducts = (category) => {
        /*if(category === "Todos"){
            setFiltered(catalogue)
        }else{
            let filterList =  catalogue.filter((product) => product.category === category)
            setFiltered(filterList)
        }*/
    }



    return (
        <Container>
            <SearchInput>
                <div><SearchOutlinedIcon /></div>
                <input onChange={(e) => setInput(e.target.value)}/>
                <button>Pesquisar</button>
            </SearchInput>
            <div>
                <button onClick={() => filterProducts('Todos')}>
                    <div className='searchImg'><StorefrontIcon fontSize="large"/></div>
                    <span>Todos os produtos</span>
                </button>
                <button onClick={() => filterProducts('Esportes')}>
                    <div className='searchImg'><SportsVolleyballIcon fontSize="large"/></div>
                    <span>Esportes</span>
                </button>
                <button onClick={() => filterProducts('Brinquedos')}>
                <div className='searchImg'><SmartToyOutlinedIcon fontSize="large"/></div>
                    <span>Brinquedos</span>
                </button>
                <button onClick={() => filterProducts('Veículos')}>
                <div className='searchImg'><DirectionsCarOutlinedIcon fontSize="large"/></div>
                    <span>Veículos</span>
                </button>
                <button onClick={() => filterProducts('Eletronicos')}>
                <div className='searchImg'><SmartphoneOutlinedIcon fontSinze="large"/></div>
                    <span>Eletrônicos e celulares</span>
                </button>
                <button onClick={() => filterProducts('Hobbies')}>
                <div className='searchImg'><TheaterComedyOutlinedIcon fontSize='large'/></div>
                    <span>Hobbies</span>
                </button>
                <button onClick={() => filterProducts('Vestuario')}>
                <div className='searchImg'><ShoppingBagOutlinedIcon fontSize='large'/></div>
                    <span>Vestuário</span>
                </button>
            </div>


        </Container>


    )


}