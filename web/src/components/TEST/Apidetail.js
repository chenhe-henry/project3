import React from "react";
import Apitest from "./Apitest";

const Apidetail = props => {
  return (
    <div>
      <ul>
        {props.listing.map(l => (
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
                // <a href={m.url} target="_blank">
                <img
                  onClick={props.clicked}
                  src={m.url}
                  height="300px"
                  width="300px"
                />
                // </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Apidetail;
