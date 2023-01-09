import "./index.css";


function Banner({image, text}) {
  return (
    <div className="containerSection">
      <div className="section ">
        <img  className="banner" src={image} alt="img" />
          {text &&<div className="text">
            <h1 className="title">{text}</h1>
          </div>}
      </div>
    </div>
  );
}

export default Banner;
