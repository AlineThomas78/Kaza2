import footer from "../../Assets/footer.svg";
import "./index.css";

function Footer() {
  return (
    <div className="FooterContainer">
      <img className="imgFooter" src={footer} alt="footer" />
      <div className="copyright">
        <p> &copy; 2020 Kaza. All right reserved</p>
      </div>
    </div>
  );
}

export default Footer;
