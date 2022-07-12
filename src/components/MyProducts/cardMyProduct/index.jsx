import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./style.css";

export const CardMyProduct = ({ product, deleteProduct, editProduct }) => {
  return (
    <div className="containerCard">
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
    </div>
  );
};
