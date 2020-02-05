import React from "react";
import "./LoadingAnimation.scss";

class LoadingAnimation extends React.Component {
  state = {};
  render() {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }
}

export default LoadingAnimation;
