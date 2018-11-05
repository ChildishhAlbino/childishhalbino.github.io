import React from "react";
import moment from "moment";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: moment().format("dddd[,] MMMM Do[,] YYYY[,] h:mm:ss a")
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      dateTime: moment().format("dddd[,] MMMM Do[,] YYYY[,] h:mm:ss a")
    });
  }

  render() {
    return (
      <div>
        <p>It is: {this.state.dateTime}.</p>
      </div>
    );
  }
}

export default Clock;
