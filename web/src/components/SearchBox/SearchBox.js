import React from "react";
import "./SearchBox.scss";

class SearchBox extends React.Component {
  state = {};
  render() {
    return (
      <div className="search__box">
        <div className="search__box--nav">Buy</div>
        <div className="search__box--nav">Rent</div>
        <div className="search__box--nav">New Homes</div>
        <div className="search__box--nav">Sold</div>
        <div className="search__box--nav">Rural</div>
        <br />
        <input
          className="search__box--input"
          type="text"
          value="Try a location or school you want to live by"
        ></input>
        <div className="search__box--btn">Search</div>
        <div className="search__box--recent"> Recent Searches &darr;</div>
        <br />
        <div className="search__box--recent-detail">DeeWhy</div>
        <div className="search__box--recent-detail">Epping</div>
        <div className="search__box--recent-detail">Five Docks</div>
      </div>
    );
  }
}

export default SearchBox;
