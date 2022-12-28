import "./index.css";
import banniere from "../../Assets/banniere.svg";

function Banner() {
  return (
    <div className="containerSection">
      <section className="section ">
        <img className="sectionImg" src={banniere} alt="img" />
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
    </div>
  );
}

export default Banner;
