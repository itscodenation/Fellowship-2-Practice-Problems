import React from "react";

class IncreaseCounterButton extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.handleClick()}>Add to the count!</button>
    );
  }
}

export {IncreaseCounterButton};
