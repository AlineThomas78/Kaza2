import "./index.css";
import Banner from "../../Components/Banner/index";
import Catalogue from "../../Components/Catalogue";
import banniere from "../../Assets/banniere.svg";

function Home() {
  return (
    <>
      <Banner image={banniere} text={'Chez vous, partout et ailleurs'}/>
      <div className="ContainerCatalogue">
        <Catalogue />
      </div>
      
    </>
  );
}
export default Home;
