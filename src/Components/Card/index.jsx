import "./index.css";

function Card({ title, cover }) {
  return (
    <div className="ContainerCard">
      <div className="cardimg">
        
      </div>
      <img className="pictures" src={cover} alt="Photo_couverture" />
      <h5 className="CardTitle">{title}</h5>
    </div>
  );
}

export default Card;
