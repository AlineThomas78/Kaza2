import { appartements } from "../Json/index";
import Card from "../Card";
import './index.css';
import { Link } from "react-router-dom";


function Catalogue() {
  return (
    
      <ul className="catalogue">
        {appartements.map(({ title, cover, id }) => (
          <Link to={`/logement/${id}`} key={id}>
            <Card title={title} cover={cover} />
          </Link>
        ))}
      </ul>
   
  );
}
export default Catalogue;
