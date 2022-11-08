import React from "react";
import ReactDOM from "react-dom";
import StopwatchDisplay from "./StopwatchDisplay";
import StopwatchHistory from "./StopwatchHistory";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0
    };
  }

  formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
      value = "0" + value;
    }
    if (rest[0] === "ms" && value.length < 3) {
      value = "0" + value;
    }
    return value;
  };

  start = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.pace(), 10);
    }
  };

  stop = () => {
    this.setState({ running: false });
    clearInterval(this.watch);
  };

  pace = () => {
    this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
    if (this.state.currentTimeMs >= 1000) {
      this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
      this.setState({ currentTimeMs: 0 });
    }
    if (this.state.currentTimeSec >= 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
      this.setState({ currentTimeSec: 0 });
    }
  };

  reset = () => {
    this.setState({
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0
    });
  };

  render() {
    return (
      <div style={{ background: "#800000", height: 300, borderRadius: 20 }}>
        <h2 ref="header" style={{ color: "white" }}>
          Stopwatch
        </h2>
        {this.state.running === false && (
          <button
            onClick={this.start}
            style={{ background: "gray", color: "yellow", borderRadius: 10 }}
          >
            START
          </button>
        )}
        {this.state.running === true && (
          <button
            onClick={this.stop}
            style={{ background: "yellow", color: "black", borderRadius: 10 }}
          >
            STOP
          </button>
        )}
        <button
          onClick={this.reset}
          style={{ background: "red", color: "white", borderRadius: 10 }}
        >
          RESET
        </button>
        <StopwatchDisplay
          ref="display"
          {...this.state}
          formatTime={this.formatTime}
        />

        <StopwatchHistory {...this.state} formatTime={this.formatTime} />
      </div>
    );
  }
}

export default Stopwatch;
