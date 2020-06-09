import React from "react";

class Bomb extends React.Component {
  // 3) The component will have an initial state with a property count of 0
  state = {
    count: 0
  };

  //4)
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  //5)
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let text = "";
    if (this.state.count >= 8) {
      text = "Boom!";
      clearInterval(this.interval);
    } else if (this.state.count % 2 === 0) {
      text = "tick";
    } else {
      text = "tock";
    }
    return (
      <div>
        <p className="bombNoise">{text}</p>
      </div>
    );
  }
}

export default Bomb;
