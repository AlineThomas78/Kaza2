import "./index.css";
import previous from "../../Assets/previous.svg";
import next from "../../Assets/next.svg";
import { useState } from "react";

function Carrousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const goPrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(pictures.length - 1);
    }
  };

  const goNext = () => {
    if (index < pictures.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className="carrousel">
      <img src={pictures[index]} alt="carrousel" />
      <div className="lenght">
        {pictures.length > 1 && (
          <span>
            {index + 1} / {pictures.length}
          </span>
        )}
      </div>
      <div className="fleches">
        {pictures.length > 1 && (
          <>
            <div>
              <img
                onClick={goPrevious}
                className="fleche"
                src={previous}
                alt="previous"
              />
            </div>
            <div>
              <img 
                onClick={goNext} 
                className="fleche" 
                src={next} 
                alt="next" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Carrousel;
