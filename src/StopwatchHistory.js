import React from "react";

class StopwatchHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: []
    };
  }

  componentDidMount() {
    this.setHistoryState();
  }

  setHistoryState = () => {
    if (localStorage.times) {
      this.setState({ history: localStorage.times.split("|") });
    } else {
      this.setState({ history: [] });
    }
  };

  saveToLocalStorage = () => {
    if (localStorage.times) {
      localStorage.times =
        `${Date().toString()} :: ${this.props.formatTime(
          this.props.currentTimeMin
        )}:${this.props.formatTime(
          this.props.currentTimeSec
        )}:${this.props.formatTime(this.props.currentTimeMs, "ms")}|` +
        localStorage.times;
    } else {
      localStorage.times = `${Date().toString()} :: ${this.props.formatTime(
        this.props.currentTimeMin
      )}:${this.props.formatTime(
        this.props.currentTimeSec
      )}:${this.props.formatTime(this.props.currentTimeMs, "ms")}|`;
    }
  };

  saveTime = () => {
    if (typeof Storage !== "undefined") {
      this.saveToLocalStorage();
    } else {
      console.error("local storage not supported");
    }
    this.setHistoryState();
  };

  resetHistory = () => {
    if (localStorage.times) {
      localStorage.removeItem("times");
    }
    this.setHistoryState();
  };

  render() {
    return (
      <div>
        <button
          onClick={this.saveTime}
          style={{ background: "#FFA500", borderRadius: 20 }}
        >
          SAVE TIME
        </button>
        <button
          onClick={this.resetHistory}
          style={{ background: "#FF00FF", borderRadius: 20 }}
        >
          RESET HISTORY
        </button>
        <h3 style={{ color: "white" }}>History</h3>
        <div>
          <ul style={{ background: "#00FF00", borderRadius: 10, margin: 10 }}>
            {this.state.history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default StopwatchHistory;
