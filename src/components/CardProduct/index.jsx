import { Container } from "./styles";

const Card = ({ id, item }) => {
  return (
    <Container>
      <div key={id} className="item">
        <img src={item.image} alt={item.description} />
        <span>{item.category}</span>
        <h3 className="title">{item.productName}</h3>
        <p className="description">{item.description}</p>
        <h2>
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>
        <button onClick={() => console.log("Quero esse!")}>Quero esse!</button>
      </div>
    </Container>
  );
};

export default Card;
