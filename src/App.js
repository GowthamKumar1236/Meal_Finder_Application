import "./styles.css";
import { Component } from "react";

class App extends Component {
  state = { name: "", picture: "", description: "" };

  render() {
    return (
      <div className="meals-container">
        <input type="search" placeholder="Search" className="search-box" />
      </div>
    );
  }
}

export default App;
