import React from "react";
import Apitest from "./Apitest";

const Apidetail = props => {
  return (
    <div>
      <div>{props.list.propertyDetails.displayableAddress}</div>
      <div>{props.list.propertyDetails.postcode}</div>
      <div>{props.list.propertyDetails.region}</div>
      <div>{props.list.headline}</div>
      <div>{props.list.priceDetails.displayPrice}</div>
      <div onClick={props.clicked}>
        {props.img.map(i => (
          <img src={i.url} height="300px" width="400px"></img>
        ))}
      </div>
      <h1>Contact:</h1>
      <div>{props.list.advertiser.name}</div>
      <div>
        {props.list.advertiser.contacts.map(c => (
          <div>
            <div>{c.name}</div>
            <img
              src={c.photoUrl}
              height="300px"
              width="300px"
              alt={c.name}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apidetail;
