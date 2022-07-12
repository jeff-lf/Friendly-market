import { useContext } from "react";
import { ChatContext } from "../../contexts/chat";

const Card = ({ index, item }) => {
  const { setShowElement } = useContext(ChatContext);

  return (
    <div key={index} className="item">
      <img src={item.image} alt={item.description} />
      <span>{item.category}</span>
      <h3>{item.productName}</h3>
      <p>{item.description}</p>
      <h2>
        {item.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h2>
      <button onClick={() => setShowElement(true)}>Quero esse!</button>
    </div>
  );
};

export default Card;
