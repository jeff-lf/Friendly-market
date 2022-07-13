import { Container } from "./styles";
import Button from '../Button'

const Card = ({ id, item }) => {
  return (
    <Container>
      <div key={id} className="item">
        <div className="divImg">
          <img src={item.image} alt={item.description} />
        </div>
        <span>{item.category}</span>
        <h3 className="title">{item.productName}</h3>
        <p className="description">{item.description}</p>
        <h2>
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>
        <Button handlerClick={() => console.log("Quero esse!")} title="Quero esse!"></Button>
      </div>
    </Container>
  );
};

export default Card;
