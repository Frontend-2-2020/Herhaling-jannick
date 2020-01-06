import React, { Component } from "react";

const styles = {
  width: "33%",
  float: "left",
  border: "3px solid red"
};

class Card extends Component {
  render() {
    return <div style={styles}>{this.props.weetje}</div>;
  }
}

export default Card;
