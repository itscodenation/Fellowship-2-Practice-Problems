import React from "react";
import ReactDOM from "react-dom";

import './styles.css';

class App extends React.Component {
  backgroundColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  constructor(props) {
    super(props);

    this.state = {
      className : 'red'
    };
  }

  changeBackgroundColor() {
    let rand = Math.random()
    this.state = {
      className : this.backgroundColors[Math.floor(rand * this.backgroundColors.length)]
    }
  }

  render() {
    return (
      <div className={this.state.className} onClick={() => this.changeBackgroundColor()}>Click me to change color!</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
