import React, {useState} from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";
import "./Details.scss";

const Details = (props) => {
  const history = useHistory();

  const [nameOfBuilding, setNameOfBuilding] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [comments, setComments] = useState("");


  const updateInformation = () => {
    // Goes to submit page with updated info, ready to go to DB

    // Update image data
    const newData = {...props.imgData};
    newData.name_of_building = nameOfBuilding;
    newData.zip = zip;
    newData.country = country;
    newData.comments = comments;
    props.setImgData(newData);

    history.push("submit");
  };

  return (
    <div className="container details-form">
      <p>Details Form</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Abandoned_building_in_the_Ronet_classification_yard_%28DSCF5518%29.jpg/800px-Abandoned_building_in_the_Ronet_classification_yard_%28DSCF5518%29.jpg"
        alt="abandoned building"
        className="preview-image"
      />
      <input type="text" placeholder="Name of building" onBlur={(e) => setNameOfBuilding(e.target.value)}/>
      <div>
        <input type="text" placeholder="Area Postcode/Zip" onBlur={(e) => setZip(e.target.value)}/>
        <input type="text" placeholder="Country" onBlur={(e) => setCountry(e.target.value)}/>
      </div>
      <input type="text" placeholder="Comments" onBlur={(e) => setComments(e.target.value)}/>

      <button className="button">Have more information?</button>


      <div>
        <button className="button" onClick={history.goBack}>
          Back
        </button>
        <button className="button" onClick={updateInformation}>
          Update Info
        </button>
      </div>
    </div>
  );
};

export default Details;
