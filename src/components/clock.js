import React from "react";
import moment from "moment";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: moment().format("LLLL")
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
      dateTime: moment().format("LLLL")
    });
  }

  render() {
    return (
      <div>
        <p>It is {this.state.dateTime}.</p>
      </div>
    );
  }
}

export default Clock;
