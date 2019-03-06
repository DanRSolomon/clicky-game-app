import React from "react";
import "./DogCard.css";

const DogCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../assets/Images/" + props.image)} />
    </div>
  </div>
);

export default DogCard;