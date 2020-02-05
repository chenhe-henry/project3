import React from "react";
import "./PropertyDetails.scss";
import Navi from "../Navi/Navi";

const PropertyDetails = props => {
  return (
    <div className="property-details">
      <div className="property-details-card" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
