import React from "react";
import "./List.scss";
class List extends React.Component {
  state = {};
  render() {
    return (
      <div className="list">
        <div className="list__title">While you are here</div>
        <div className="list__item">
          <div className="list__item-detail">
            <p>Explore home loans</p>
          </div>
          <div className="list__item-detail">
            <p>See what your property may be worth</p>
          </div>
          <div className="list__item-detail">
            <p>Looking to sell?</p>
          </div>
          <div className="list__item-detail">
            <p>Insure your property</p>
          </div>
          <div className="list__item-detail">
            <p>See aution results</p>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
