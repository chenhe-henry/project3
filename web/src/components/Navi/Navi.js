import React from "react";
import "./Navi.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Navi extends React.Component {
  state = {};
  render() {
    return (
      <div className="banner">
        <div className="banner-container">
          <div className="banner-container-brand">
            <Link to="/" className="banner-container-brand-link">
              <strong>Find Home</strong>
            </Link>
          </div>
          <div className="banner-container-nav">
            <div className="banner-container-nav-link">Find a Property</div>
            <div className="banner-container-nav-link">Research</div>
            <div className="banner-container-nav-link">Find Agents</div>
            <div className="banner-container-nav-link">For Owners</div>
            <div className="banner-container-nav-link">Home Loans</div>
            <div className="banner-container-nav-link">Insurance</div>
            <div className="banner-container-nav-link">News</div>
            <div className="banner-container-nav-link">Commercial</div>
            <div className="banner-container-nav-link login">Login</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navi;
