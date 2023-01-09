import etoilePleine from "../../Assets/etoilePleine.png";
import etoileVide from "../../Assets/etoileVide.svg";

function Rating({ rating }) {
  const fakeArray = Array(5).fill(0);

  return fakeArray.map((element, index) =>
    index < rating ? (
      <img src={etoilePleine} alt="etoile" />
    ) : (
      <img src={etoileVide} alt="etoile" />
    )
  );
}

export default Rating;
