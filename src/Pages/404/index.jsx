import error from "../../Assets/error.svg";
import "./index.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="ContainerError">
      <div className="Section">
        <img className="ImgError" src={error} alt="img_error" />
        <p className="P_Error">
          Oups ! La page que vous demandez n'existe pas.{" "}
        </p>
      </div>
      <div className="LinkError">
        <Link className="Link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <h1>hello</h1>
    </div>
  );
}

export default Error;
