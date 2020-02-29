import React from "react";
import ReactDOM from "react-dom";
import fetchGIF from "./fetch-gif";

let apiKey = "eCLr0aYcPt2PJvPUPgcqR5PZP9eRd8HC"; // <-- add the API key from your slides

let searchTerm = "dogs"; // <-- add a search term

class App extends React.Component {
  constructor() {
    super();
    /**
     * This is where your data starts and needs
     * to low down through your other components.
     */
    this.state = {
      imageUrl: null
    };
    this.fetchGIF = fetchGIF.bind(this);
    this.fetchGIF(apiKey, searchTerm);
  }

  onClick() {
    this.fetchGIF(apiKey, searchTerm);
  }

  render() {
    if (this.state.imageUrl || !apiKey || !searchTerm) {
      return <Giphy data={this.state.imageUrl} onClick={() => this.onClick()} />;
    } else {
      console.log("Here");
      return null;
    }
  }
}

/**
 * This is the component where your data will flow to.
 * Send the data down from the parent App component!
 */
function Giphy(props) {
  return <div><img src={props.data} onClick={() => props.onClick()} /></div>;
}

/*
class Giphy extends React.Component {
  render() {
    return (
     <div>Where's my data? :(</div>;
    );
  }
}
*/

ReactDOM.render(<App />, document.getElementById("root"));
