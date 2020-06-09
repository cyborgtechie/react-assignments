import React from "react";
import { render } from "@testing-library/react";

class RouletteGun extends React.Component {
  state = {
    chamber: null,
    spinningTheChamber: false,
    bulletInChamber: 8
  };

  handleClick = () => {
    this.setState({
      spinningTheChamber: true
    });
    this.timeout = setTimeout(() => {
      const generateRandom = Math.ceil(Math.random() * 8);
      this.setState({
        chamber: generateRandom,
        spinningTheChamber: false
      });
    }, 2000);
  };
  render() {
    let text = "";
    if (this.state.spinningTheChamber) {
      text = "spinning the chamber and pulling the trigger!";
    } else if (this.state.chamber == this.state.bulletInChamber) {
      text = "bang!!!";
    } else {
      text = "you're safe!";
    }
    return (
      <div>
        <p className="text">{text}</p>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default RouletteGun;
