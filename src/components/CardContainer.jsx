import Card from "./Card";

function CardContainer({ data }) {
  console.log(data);

  return (
    <div className="card-container mt-5">
      {data.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
}

export default CardContainer;
