import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "./Apitest.scss";

import Apidetail from "./Apidetail";
import FullApi from "./FullApi";
class Apitest extends React.Component {
  state = { listing: [], selectedListingId: null };

  componentWillMount() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-Api-Key", "key_358bea2380f4e7f0acb999de88b0b4e9");

    var raw = JSON.stringify({
      listingType: "Rent",
      propertyTypes: ["House", "NewApartments"],
      minBedrooms: 3,
      minBathrooms: 2,
      minCarspaces: 1,
      locations: [
        {
          state: "NSW",
          region: "",
          area: "",
          suburb: "Carlingford",
          postCode: "",
          includeSurroundingSuburbs: false
        }
      ]
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    // fetch(
    //   "https://api.domain.com.au/v1/listings/residential/_search",
    //   requestOptions
    // )
    fetch("/domain_dumps/search.json")
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({ listing: result });
      })
      .catch(error => console.log("error", error));
  }

  imgSeletedHandler = id => {
    this.setState({ selectedListingId: id });
    console.log("id :", id);
  };

  render() {
    const listings = this.state.listing.map(l => {
      return (
        <Apidetail
          list={l.listing}
          key={l.listing.id}
          id={l.listing.id}
          clicked={() => this.imgSeletedHandler(l.listing.id)}
        />
      );
    });
    return (
      <div>
        {listings}
        {
          /* <Apidetail
          list={this.state.listing}
          key={this.state.listing.id}
          clicked={() => this.imgSeletedHandler(this.state.listing.id)}
        /> */
          <FullApi id={this.state.selectedListingId} />
        }
      </div>
    );
  }
}

export default Apitest;

// test

//
