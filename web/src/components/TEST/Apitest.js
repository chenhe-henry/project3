import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "./Apitest.scss";
class Apitest extends React.Component {
  state = { type: [], listing: [] };

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

  render() {
    return (
      <div>
        <p>Hi</p>
        <ul>
          {this.state.listing.map(l => (
            <li>
              <div>{l.listing.propertyDetails.displayableAddress}</div>
              <div>{l.listing.propertyDetails.postcode}</div>
              <div>{l.listing.propertyDetails.region}</div>
              <br />
              {l.listing.headline}
              <br />
              {l.listing.priceDetails.displayPrice}
              <br />
              Contact:
              <div>{l.listing.advertiser.name}</div>
              <div className="contact-detail">
                {l.listing.advertiser.contacts.map(c => (
                  <div>
                    <div>{c.name}</div>
                    <img
                      src={c.photoUrl}
                      height="300px"
                      width="300px"
                      alt={c.name}
                    />
                  </div>
                ))}
              </div>
              <br />
              <div className="property-img">
                {l.listing.media.map(m => (
                  <a href={m.url} target="_blank">
                    <img src={m.url} height="300px" width="300px" />
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Apitest;

// test

//
