import React from "react";
import "./Navi.scss";
class Navi extends React.Component {
  state = {};
  render() {
    return (
      <div className="navigation">
        <h1 className="navigation-brand">Domain</h1>
        <h2 className="navigation-title">
          Search Australia's home of property
        </h2>
      </div>
    );
  }
}

export default Navi;
