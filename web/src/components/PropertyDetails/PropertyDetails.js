import React, { Fragment } from "react";
import "./PropertyDetails.scss";
import Navi from "../Navi/Navi";
class PropertyDetails extends React.Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Navi />
        <div className="property-details">
          <p className="property-details--text">
            Welcome to Property Details Page
          </p>
          <div className="property-details--visual">
            <img
              className="property-details--visual--img"
              src="https://rimh2.domainstatic.com.au/ZXahnYrndlCjReMN-uudzz724pQ=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/http://b.domainstatic.com.au.s3-website-ap-southeast-2.amazonaws.com/2016045005_1_1_200131_050507-w1920-h1280"
              alt="pic-1"
            ></img>
          </div>
          <hr className="property-details--gap" />
          <h3>Property Features</h3>
          <ul className="property-details--features">
            <li>Air conditioning</li>
            <li>Balcony / Deck</li>
            <li>Bath</li>
            <li>Broadband internet access</li>
            <li>Built in wardrobes</li>
            <li>Cable or Satellite</li>
          </ul>
          <hr className="property-details--gap" />
          <h3>Property Description</h3>
          <p className="property-details--description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="property-details__button">Read More</button>
        </div>
      </Fragment>
    );
  }
}

export default PropertyDetails;
