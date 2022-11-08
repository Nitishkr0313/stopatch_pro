import "./styles.css";
import React from "react";
import Stopwatch from "./Stopwatch";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Stopwatch />
      </div>
    );
  }
}

export default App;
