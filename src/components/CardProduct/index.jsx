const Card = ({ index, item }) => {
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
      <button onClick={() => console.log("Quero esse!")}>Quero esse!</button>
    </div>
  );
};

export default Card;
