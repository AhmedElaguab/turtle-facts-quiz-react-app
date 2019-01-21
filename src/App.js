import React, { Component } from "react";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Main App Header */}
        <header>
          <div className="container">
            <h1 className="mt-4">Turtle Facts Quiz</h1>
            <p className="lead">
              Learn about all the turtles below before you decide to take on the{" "}
              <strong>TURTLE QUIZ</strong>
            </p>
            <hr />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
