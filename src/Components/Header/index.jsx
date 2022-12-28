import { Link } from "react-router-dom";
import LOGO from "../../Assets/LOGO.svg";
import "./index.css";

function Header() {
  return (
    <div className="NavContainer">
      <div className="Logo">
        <Link to="/">
          <img className="Logo" alt="" src={LOGO} />
        </Link>
      </div>

      <div className="LinkContainer">
        <Link className="Link" to="/">
          Accueil
        </Link>

        <Link className="Link" to="/propos">
          A Propos
        </Link>
      </div>
    </div>
  );
}

export default Header;
