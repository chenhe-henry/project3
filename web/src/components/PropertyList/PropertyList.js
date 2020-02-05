import React, { Fragment, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./PropertyList.scss";
import Axios from "axios";

import PropertyDetails from "../PropertyDetails/PropertyDetails";

class PropertyList extends React.Component {
  state = { users: [], selectUserId: null };
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      this.setState({
        users: response.data
      });
      console.log(response);
    });
  }
  userSelectedHandler = id => {
    this.setState({ selectUserId: id });
  };
  render() {
    const users = this.state.users.map(user => {
      return (
        <PropertyDetails
          key={user.id}
          name={user.name}
          email={user.email}
          clicked={() => this.userSelectedHandler(user.id)}
        />
      );
    });
    return (
      <Fragment>
        {/* <Link to="/houses/1" className="card-link"> */}
        <div className="card">{users}</div>
        {/* </Link> */}
        <h2 className="property-list__text">We found these just for you</h2>
        <div className="rent-house">
          <Link to="/houses/1">
            <figure class="rent-house-shape">
              <img
                className="rent-house-img"
                src="https://rimh2.domainstatic.com.au/ZXahnYrndlCjReMN-uudzz724pQ=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/http://b.domainstatic.com.au.s3-website-ap-southeast-2.amazonaws.com/2016045005_1_1_200131_050507-w1920-h1280"
                alt="pic-1"
              ></img>
            </figure>
          </Link>
          <Link to="/houses/1">
            <figure class="rent-house-shape">
              <img
                className="rent-house-img"
                src="https://rimh2.domainstatic.com.au/sG64XFCoCRAPgNTpao3kQUnCpPI=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/http://b.domainstatic.com.au.s3-website-ap-southeast-2.amazonaws.com/2016036221_3_1_200128_111059-w3000-h2000"
                alt="pic-1"
              ></img>
            </figure>
          </Link>
          <Link to="/houses/1">
            <figure class="rent-house-shape">
              <img
                className="rent-house-img"
                src="https://rimh2.domainstatic.com.au/3QI7SGCiB9CHeSsr6SDOz5ZNAmU=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/http://b.domainstatic.com.au.s3-website-ap-southeast-2.amazonaws.com/2016038129_1_1_200129_045408-w1600-h1067"
                alt="pic-1"
              ></img>
            </figure>
          </Link>
          <Link to="/houses/1">
            <figure class="rent-house-shape">
              <img
                className="rent-house-img"
                src="https://rimh2.domainstatic.com.au/2uP1cCMeOMK8FvPXz2zmLD45J5k=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/http://b.domainstatic.com.au.s3-website-ap-southeast-2.amazonaws.com/2016035172_3_1_200128_062702-w1920-h1440"
                alt="pic-1"
              ></img>
            </figure>
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default PropertyList;
