import React from "react";
import axios from "axios";

class FullApi extends React.Component {
  state = { loadedProperty: null };
  componentDidUpdate() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-Api-Key", "key_358bea2380f4e7f0acb999de88b0b4e9");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    if (this.props.id) {
      if (
        !this.state.loadedProperty ||
        (this.state.loadedProperty &&
          this.state.loadedProperty.listing.id !== this.props.id)
      ) {
        // fetch(
        //   "https://api.domain.com.au/v1/listings/" + this.props.id,
        //   requestOptions
        // )
        fetch("/domain_dumps/result.json")
          .then(response => response.json())
          .then(result => {
            console.log(result);
            this.setState({ loadedProperty: result });
          })
          .catch(error => console.log("error", error));
      }
    }
  }
  render() {
    let post = <p>Please select a post</p>;
    if (this.props.id) {
      post = <p>Loading...</p>;
    }
    if (this.state.loadedProperty) {
      post = (
        <h1>
          {this.state.loadedProperty.listing.propertyDetails.displayableAddress}{" "}
          + {this.props.id}
        </h1>
      );
    }
    return post;
  }
}

export default FullApi;
