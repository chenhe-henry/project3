import React from "react";

class FullApi extends React.Component {
  state = {};
  render() {
    let post = <p>Please select a post</p>;
    if (this.props.id) {
      post = <h1>Title</h1>;
    }
    return post;
  }
}

export default FullApi;
