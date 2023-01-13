import { useParams } from "react-router-dom";
import Collapse from "../../Components/Collapse";
import { appartements } from "../../Components/Json";
import "./index.css";
import Tags from "../../Components/Tags";
import Carrousel from "../../Components/Carrousel";
import Rating from "../../Components/Rating";
import NotFound from "../../Pages/NotFound";

function LocationDetails() {
  const { id } = useParams();
  const location = appartements.find((appartement) => appartement.id === id);
  return location?(
   
    <div className="ContainerAnnonce">
      <Carrousel pictures={location.pictures} />
      <div className="ContainerSection">
        
        <div className="section1">
          <div className="sectionT">
            <p>{location.title}</p>
          </div>
          <div className="location">{location.location}</div>
          <Tags tag={location.tags} />
        </div>

        <div className="section2">
          <div className="host">
            <div className="hostName">{location.host.name}</div>
            <img
              className="hostPicture"
              src={location.host.picture}
              alt="hostPicture"
            />
          </div>

          <div className="rating">
            <Rating rating={location.rating} />
          </div>
        </div>
      </div>
      <div className="SectionCollapse">
        <div className="ContainerCollapse">
          <div className="CollapseDetails">
            <Collapse
              isMap={false}
              title={"Description"}
              data={location.description}
            />
          </div>
          <div  className="CollapseDetails">
            <Collapse
              title={"Equipements"}
              isMap={true}
              data={location.equipments}
            />
          </div>
        </div>
      </div>
    </div>
  ): <NotFound/>
}
export default LocationDetails;
