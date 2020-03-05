import React from "react";
import ReactDOM from "react-dom";
import { IncreaseCounterButton } from "./increase_counter_button";
import { CounterDisplay } from "./counter";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increaseCounter() {
    this.setState(prevState => ({
      count: ++prevState.count,
    }));
  }

  decreaseCounter() {
    this.setState(prevState => ({
      count: --prevState.count,
    }));
  }

  render() {
    return (
      <div>
        <IncreaseCounterButton handleClick={() => this.increaseCounter()} />
        <DecreaseCounterButton handleClick={() => this.decreaseCounter()} />
        <CounterDisplay number={this.state.count} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
