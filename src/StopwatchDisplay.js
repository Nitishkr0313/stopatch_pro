import React from "react";

class StopwatchDisplay extends React.Component {
  render() {
    return (
      <div
        className={"stopwatch__display"}
        style={{ background: "#00FF00", borderRadius: 10, margin: 10 }}
      >
        <span>
          {this.props.formatTime(this.props.currentTimeMin)}:
          {this.props.formatTime(this.props.currentTimeSec)}:
          {this.props.formatTime(this.props.currentTimeMs, "ms")}
        </span>
      </div>
    );
  }
}

export default StopwatchDisplay;
