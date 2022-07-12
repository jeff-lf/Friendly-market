import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {ContainerCard} from './style.js'
import {ModalDelete} from '../Modals/delete/index'
import { useState } from "react";

export const CardMyProduct = ({ product }) => {
  const [show, setShow] = useState(false)
  function deleteProduct(){
    setShow(true)
    console.log(show)
  }

  function editProduct(){
    setShow(true)
  }
  return (
    <ContainerCard>
      <img className="cardImg" src={product.image} alt={product.description} />
      <div className="containerInfo">
        <span>{product.category}</span>
        <span>{product.productName}</span>
        <p>{product.description}</p>
        <span>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className='containerBtns'>
        <FaEdit onClick={() => editProduct()} />
        <MdDelete onClick={() => deleteProduct()} />
      </div>
      <ModalDelete show={show} setShow={setShow} product={product}/>
    </ContainerCard>
  );
};
