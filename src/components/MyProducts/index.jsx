import { ContainerMyProducts, StyledH2 } from "./style";
import { CatalogueContext } from "../../contexts/catalogue/catalogue";
import { useContext, useState } from "react";
import { CardMyProduct } from "./cardMyProduct";
import Button from '../Button/index'
import { ModalCadastrar } from "./Modals/cadastrarProduto";


const MyProducts = () => {
  const [show, setShow] = useState(false)
  const { catalogue } = useContext(CatalogueContext);
  const id = JSON.parse(localStorage.getItem("@Market:id"))
  const filteredList = catalogue.filter(elem => elem.userId === 1)

  
    const CadastrarProduct = () => {
        setShow(true)
    }
  
  return (
    <ContainerMyProducts>
      <StyledH2>Bem vindo, User!</StyledH2>
      <span>Seus Produtos</span>
      <div className="listContainer">
        <ul>
          {filteredList?.map((product, index) => (
            <CardMyProduct key={index} product={product}/>
          ))}
        </ul>
      </div>
      <Button blue={"blue"} handlerClick={CadastrarProduct} title={"Cadastrar Produto"}></Button>
      <ModalCadastrar show={show} setShow={setShow}/>
    </ContainerMyProducts>
  );
};

export default MyProducts;
