import "./index.css";
import open from "../../Assets/open.svg";
import close from "../../Assets/close.svg";
import { useState } from "react";

function Collapse({ title, isMap, data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Accordion">
      <div onClick={() => setIsOpen(!isOpen)} className="rectangle">
        <div className="Taccordion">{title}</div>
        <img className="imgAccordions" src={isOpen ? open : close} alt="action" />
      </div>
      {isOpen && (
        <div className="children">
          {isMap ? (
            <ul>
              {data.map((items, index) => (
                <li key={index}>{items}</li>
              ))}
            </ul>
          ) : (
            <p>{data}</p>
          )}
        </div>
      )}
    </div>
  );
}
export default Collapse;
