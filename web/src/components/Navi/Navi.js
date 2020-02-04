import React from "react";
import "./Navi.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Navi extends React.Component {
  state = {};
  render() {
    return (
      <div className="navigation">
        <h1 className="navigation-brand">
          <Link to="/" className="navigation-brand-link">
            <strong>Domain</strong>
          </Link>
        </h1>
        <h2 className="navigation-title">
          Search Australia's home of property
        </h2>
      </div>
    );
  }
}

export default Navi;
