import React, { Component } from "react";
import "tachyons";

class Card extends Component {
  render() {
    return (
      <div className="bg-light-green dib br3 pa2 ma2 grow bw4 shadow-5">
        <h1>Robot Friends</h1>
        {console.log(this.props.id)}
        <img src={`https://robohash.org/${this.props.id}?100x100`} alt="Rots" />
        <div>
          <h2> {this.props.name} </h2>
          <p> {this.props.email} </p>
        </div>
      </div>
    );
  }
}
export default Card;
