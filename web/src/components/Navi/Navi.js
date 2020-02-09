import React from "react";
import "./Navi.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Navi extends React.Component {
  state = {};
  render() {
    return (
      <div className="banner">
        <div className="container">
          <div className="banner-brand">
            <Link to="/" className="banner-brand-link">
              <strong>Domain</strong>
            </Link>
          </div>
          <div>Find a Property</div>
          <div>Research</div>
          <div>Find Agents</div>
          <div>For Owners</div>
          <div>Home Loans</div>
          <div>Insurance</div>
          <div>News</div>
          <div>Commercial</div>
          <div>Login</div>
        </div>
        <h2 className="banner-title">Search Australia's home of property</h2>
      </div>
    );
  }
}

export default Navi;
